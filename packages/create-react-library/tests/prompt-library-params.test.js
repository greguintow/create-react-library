'use strict'

const test = require('ava')

const promptLibraryParams = require('../lib/prompt-library-params')

const opts = {
  name: 'my-custom-template',
  author: 'nala',
  description: 'this is a auto-generated test module. please ignore.',
  repo: 'nala/my-custom-template',
  license: 'GPL',
  manager: 'yarn',
  git: true
}

test('passed options are returned when skipPrompts is true', async t => {
  const result = await promptLibraryParams(Object.assign({}, opts, { skipPrompts: true }))
  t.deepEqual(opts, result)
})