#!/usr/bin/env node
const program = require('commander');

program
  .command('create-project', 'Create a new kakunin project')
  .parse(process.argv);

//kakunin-cli create-project
