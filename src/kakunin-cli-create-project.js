#!/usr/bin/env node
const program = require('commander');
const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs-extra');

const json = require('./template/package.json');

let directory;

program
  .arguments('<dir>')
  .action(function(dir) {
    directory = dir;
  })
  .parse(process.argv);


if (typeof directory === 'undefined') {
  console.error('You must specify directory as the third parameter.');
  process.exit(1);
}

const kakuninConfigPath = path.resolve(directory);

mkdirp(kakuninConfigPath, function(err) {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    fs.writeFileSync(path.join(kakuninConfigPath, 'package.json'), JSON.stringify(json));

    console.log("Project created.")
    console.log(`Go to ${kakuninConfigPath} and type:`)
    console.log("npm install");
  }
});


