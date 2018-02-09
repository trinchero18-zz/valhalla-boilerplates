#!/usr/bin/env node
var download = require('download-github-repo'),
    program = require('commander');

program
 .version('0.1.0')
 .option('-f, --folder [type]')
 .parse(process.argv);

let folder = program.folder ? program.folder : './react-redux-boilerplate'


download('trinchero18/valhalla-boilerplates', folder, function(err){
    if(err)
    console.log(err)
})
