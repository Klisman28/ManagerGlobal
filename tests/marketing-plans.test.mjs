import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'

// Use the project's compiler so these tests also run on Node versions without TS stripping.
async function loadDataModule(path) {
  const source = await readFile(new URL(path, import.meta.url), 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  })
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
}

const { marketingPlans, formatQuetzales, marketingPlanMessage } = await loadDataModule('../src/data/marketingPlans.ts')
const { buildWhatsappLink } = await loadDataModule('../src/data/whatsapp.ts')
const { navigationLinks } = await loadDataModule('../src/data/navigation.ts')

test('the three client plans retain their approved prices and included ad budgets', () => {
  assert.deepEqual(marketingPlans.map(({ name, price, adBudget }) => [name, price, adBudget]), [
    ['Impulso Local', 2000, 600],
    ['Contenido y Captación', 3500, 1000],
    ['Expansión Multicanal', 6500, 2000],
  ])
  assert.equal(new Set(marketingPlans.map(({ id }) => id)).size, 3)
  assert.equal(formatQuetzales(3500), 'Q3,500')
})

test('each plan opens a correctly encoded WhatsApp draft at the authorized number', () => {
  for (const plan of marketingPlans) {
    const message = marketingPlanMessage(plan)
    const url = new URL(buildWhatsappLink(message))
    assert.equal(url.origin, 'https://wa.me')
    assert.equal(url.pathname, '/50258208681')
    assert.equal(url.searchParams.get('text'), message)
    assert.ok(message.includes(plan.name))
    assert.ok(message.includes(formatQuetzales(plan.price)))
    assert.ok(message.includes(formatQuetzales(plan.adBudget)))
  }
})

test('paid and organic channels remain distinct', () => {
  assert.equal(marketingPlans[0].organicChannels, undefined)
  assert.equal(marketingPlans[1].organicChannels, 'TikTok')
  assert.equal(marketingPlans[2].organicChannels, 'TikTok y YouTube Shorts')
  assert.equal(marketingPlans[2].adBreakdown, 'Q1,200 en Meta + Q800 en Google')
  for (const plan of marketingPlans) {
    assert.doesNotMatch(plan.paidChannels, /TikTok|YouTube/)
  }
})

test('desktop, mobile and footer share exactly the five requested navigation items', () => {
  assert.deepEqual(navigationLinks.map(({ label }) => label), ['Inicio', 'Marketing', 'Software', 'Luna Films', 'Contacto'])
  assert.equal(new Set(navigationLinks.map(({ to }) => to)).size, 5)
})

test('legacy pages remain routable and Luna Films does not show marketing plans', async () => {
  const router = await readFile(new URL('../src/router/index.ts', import.meta.url), 'utf8')
  assert.ok(router.includes("path: '/soluciones-industriales'"))
  assert.ok(router.includes("path: '/portafolio'"))
  const luna = await readFile(new URL('../src/pages/LunaFilmsPage.vue', import.meta.url), 'utf8')
  assert.ok(!luna.includes('marketingPlans'))
})
