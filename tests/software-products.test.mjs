import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'

async function loadDataModule(path) {
  const source = await readFile(new URL(path, import.meta.url), 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  })
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
}

const { softwareProducts, softwareQuoteMessage, softwareAccessMessage, CUSTOM_SOFTWARE_MESSAGE } =
  await loadDataModule('../src/data/softwareProducts.ts')
const { buildWhatsappLink } = await loadDataModule('../src/data/whatsapp.ts')

test('the software catalog contains exactly the three owner-confirmed products', () => {
  assert.deepEqual(softwareProducts.map(({ id, name }) => [id, name]), [
    ['pos', 'Punto de Venta'],
    ['creditos', 'Sistema de Créditos'],
    ['fisioterapia', 'Fisioterapia'],
  ])
  for (const product of softwareProducts) {
    assert.equal(product.features.length, 4)
    assert.ok(product.description.length > 0)
  }
})

test('direct access uses only the two exact URLs supplied by the owner', () => {
  assert.equal(softwareProducts[0].accessUrl, 'https://pos.managerglobalads.com/login')
  assert.equal(softwareProducts[1].accessUrl, 'https://xn--crditosroksa-ceb.com/login')
  assert.equal(softwareProducts[2].accessUrl, null)
  for (const product of softwareProducts.filter(({ accessUrl }) => accessUrl)) {
    const url = new URL(product.accessUrl)
    assert.equal(url.protocol, 'https:')
    assert.equal(url.username, '')
    assert.equal(url.password, '')
  }
})

test('each sales inquiry identifies the selected product at the correct WhatsApp number', () => {
  for (const product of softwareProducts) {
    const message = softwareQuoteMessage(product)
    const url = new URL(buildWhatsappLink(message))
    assert.equal(url.origin, 'https://wa.me')
    assert.equal(url.pathname, '/50258208681')
    assert.equal(url.searchParams.get('text'), message)
    assert.ok(message.includes(product.name))
  }
})

test('physiotherapy access is an explicit inquiry, not an invented system link', () => {
  const product = softwareProducts[2]
  const url = new URL(product.accessUrl ?? buildWhatsappLink(softwareAccessMessage(product)))
  assert.equal(url.origin, 'https://wa.me')
  assert.ok(url.searchParams.get('text').includes('Fisioterapia'))
  assert.ok(url.searchParams.get('text').includes('obtener acceso'))
})

test('custom software and chatbots have a dedicated inquiry', () => {
  const url = new URL(buildWhatsappLink(CUSTOM_SOFTWARE_MESSAGE))
  assert.ok(CUSTOM_SOFTWARE_MESSAGE.includes('software a medida'))
  assert.ok(CUSTOM_SOFTWARE_MESSAGE.includes('chatbot'))
  assert.equal(url.searchParams.get('text'), CUSTOM_SOFTWARE_MESSAGE)
  assert.equal(url.pathname, '/50258208681')
})
