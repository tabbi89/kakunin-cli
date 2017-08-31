#!/usr/bin/env node
const program = require('commander');

program
  .command('create-project <dir> [version]', 'Create a new kakunin project in directory with optional kakunin version, default latest')
  .parse(process.argv);

//kakunin-cli create-project
