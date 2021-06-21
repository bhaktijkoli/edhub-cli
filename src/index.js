#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const { program } = require('commander')
const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8')
)
program.version(packageJson.version).description('Edhub CLI').parse()
