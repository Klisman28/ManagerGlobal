import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const config = await readFile(new URL('../public/.htaccess', import.meta.url), 'utf8')
const router = await readFile(new URL('../src/router/index.ts', import.meta.url), 'utf8')
const pattern = config.match(/^\s*RewriteRule (\S+) index\.html \[L\]$/m)?.[1]
assert.ok(pattern, 'A known-page rewrite must serve index.html')
const fallback = new RegExp(pattern)

test('Hostinger serves every history route on direct visits and refreshes', () => {
  const routes = [...router.matchAll(/path: '([^']+)'/g)].map((match) => match[1])
  assert.ok(routes.length > 1)
  for (const route of routes.filter((path) => path !== '/')) {
    assert.ok(fallback.test(route.slice(1)), route)
    assert.ok(fallback.test(`${route.slice(1)}/`), `${route}/`)
  }
})

test('existing files, directories and unknown paths are not rewritten', () => {
  assert.match(config, /RewriteCond %\{REQUEST_FILENAME\} !-f/)
  assert.match(config, /RewriteCond %\{REQUEST_FILENAME\} !-d/)
  for (const path of ['index.html', 'assets/missing.js', 'missing-page', '.env', 'contacto/missing']) {
    assert.equal(fallback.test(path), false, path)
  }
})
