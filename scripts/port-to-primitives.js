#!/usr/bin/env node
// Rewrites beanheads TSX components to import SVG elements from ./primitives
// instead of using DOM SVG intrinsics. Run once; safe to re-run (idempotent).
const fs = require('fs')
const path = require('path')

const SRC_DIR = path.join(__dirname, '../src')

const TAGS = {
  svg: 'Svg',
  path: 'Path',
  g: 'G',
  circle: 'Circle',
  rect: 'Rect',
  ellipse: 'Ellipse',
  mask: 'Mask',
  defs: 'Defs',
  clipPath: 'ClipPath',
  line: 'Line',
  polygon: 'Polygon',
  polyline: 'Polyline',
}

function relPath(file) {
  return path.relative(SRC_DIR, file)
}

function primitivesImportPath(file) {
  const rel = relPath(file)
  const depth = rel.split(path.sep).length - 1
  return depth === 0 ? './primitives' : Array(depth).fill('..').join('/') + '/primitives'
}

function detectUsed(content) {
  return Object.entries(TAGS)
    .filter(([lower]) => {
      // match <tag followed by space, >, /  OR  </tag>
      return (
        new RegExp(`<${lower}[\\s>/]`).test(content) ||
        new RegExp(`</${lower}>`).test(content)
      )
    })
    .map(([, upper]) => upper)
    .sort()
}

function transform(content, used, importPath) {
  // Replace opening tags: <tag<ws|>|/> → <Tag<ws|>|/>
  for (const [lower, upper] of Object.entries(TAGS)) {
    if (!used.includes(upper)) continue
    content = content.replace(new RegExp(`<${lower}([\\s>/])`, 'g'), `<${upper}$1`)
    content = content.replace(new RegExp(`</${lower}>`, 'g'), `</${upper}>`)
  }

  // Fix strokeWidth="Npx" → strokeWidth={N}
  content = content.replace(/strokeWidth="(\d+(?:\.\d+)?)px"/g, 'strokeWidth={$1}')

  // Remove xmlns attribute (not needed / not accepted by react-native-svg)
  content = content.replace(/ xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, '')

  // Inject primitives import after the first "import React from 'react'" line
  const importLine = `import { ${used.join(', ')} } from '${importPath}'`
  if (!content.includes(`from '${importPath}'`)) {
    content = content.replace(
      /^(import React from 'react'\n)/m,
      `$1${importLine}\n`
    )
  }

  return content
}

function walkTsx(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) files.push(...walkTsx(full))
    else if (e.name.endsWith('.tsx')) files.push(full)
  }
  return files
}

const files = walkTsx(SRC_DIR)

let changed = 0
for (const file of files) {
  // Skip primitives shim itself if it ends up as tsx
  if (file.endsWith('primitives.tsx')) continue

  const original = fs.readFileSync(file, 'utf8')
  const used = detectUsed(original)
  if (used.length === 0) continue

  const importPath = primitivesImportPath(file)
  const updated = transform(original, used, importPath)

  if (updated !== original) {
    fs.writeFileSync(file, updated)
    console.log(`  ${relPath(file)}  →  ${used.join(', ')}`)
    changed++
  }
}

console.log(`\nDone. ${changed} files updated.`)
