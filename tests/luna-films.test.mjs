import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'

const dataSource = await readFile(new URL('../src/data/lunaFilms.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(dataSource, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
})
const { lunaFilmsImages, lunaFilmsVideo } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
)
const showcase = await readFile(new URL('../src/components/sections/LunaFilmsShowcase.vue', import.meta.url), 'utf8')
const page = await readFile(new URL('../src/pages/LunaFilmsPage.vue', import.meta.url), 'utf8')
const publicFile = (path) => new URL(`../public${path}`, import.meta.url)

test('the showcase contains the five selected designs and local image files', async () => {
  assert.equal(lunaFilmsImages.length, 5)
  assert.equal(new Set(lunaFilmsImages.map(({ id }) => id)).size, 5)
  for (const image of lunaFilmsImages) {
    assert.match(image.src, /^\/media\/luna-films\/[a-z-]+\.jpg$/)
    assert.ok(image.alt.length > 20)
    assert.equal(image.width, image.height)
    assert.ok((await stat(publicFile(image.src))).size < 400_000)
  }
})

test('Costabella is the only video included and stays within the web size budget', async () => {
  assert.equal(lunaFilmsVideo.title, 'Costabella')
  assert.equal(lunaFilmsVideo.type, 'video/mp4')
  const files = await readdir(new URL('../public/media/luna-films/', import.meta.url))
  assert.deepEqual(files.filter((name) => name.endsWith('.mp4')), ['costabella.mp4'])
  const size = (await stat(publicFile(lunaFilmsVideo.src))).size
  assert.ok(size > 1_000_000 && size < 25_000_000, `Video size: ${size}`)
  assert.ok((await stat(publicFile(lunaFilmsVideo.poster))).size > 0)
})

test('the MP4 has fast-start metadata before video data', async () => {
  const bytes = await readFile(publicFile(lunaFilmsVideo.src))
  const atoms = []
  for (let offset = 0; offset + 8 <= bytes.length;) {
    let size = bytes.readUInt32BE(offset)
    const type = bytes.toString('ascii', offset + 4, offset + 8)
    if (size === 1) size = Number(bytes.readBigUInt64BE(offset + 8))
    if (size === 0) size = bytes.length - offset
    assert.ok(size >= 8 && offset + size <= bytes.length)
    atoms.push(type)
    offset += size
  }
  assert.equal(atoms[0], 'ftyp')
  assert.ok(atoms.includes('moov') && atoms.includes('mdat'))
  assert.ok(atoms.indexOf('moov') < atoms.indexOf('mdat'))
})

test('media waits for interaction and the image viewer uses an accessible native dialog', () => {
  assert.match(showcase, /preload="none"/)
  assert.doesNotMatch(showcase, /\bautoplay\b/)
  assert.match(showcase, /loading="lazy"/)
  assert.match(showcase, /<dialog/)
  assert.match(showcase, /aria-labelledby="luna-image-title"/)
  assert.match(showcase, /\.showModal\(\)/)
  assert.match(showcase, /aria-label="Cerrar imagen"/)
  assert.match(showcase, /onBeforeUnmount\(restoreScroll\)/)
})

test('Luna Films shows selected work instead of the old placeholder portfolio', () => {
  assert.match(page, /<LunaFilmsShowcase\s*\/>/)
  assert.doesNotMatch(page, /PortfolioCard|portfolioProjects/)
  assert.match(page, /marketingPackages/)
})
