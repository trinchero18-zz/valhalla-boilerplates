#!/usr/bin/env node
var download = require('download-github-repo'),
    program = require('commander');

program
 .command('init <param>')
 .description('run the given remote command')
 .action(function(param) {
    let folder = param ? param : './valhalla-boilerplate-react';
    download('trinchero18/valhalla-boilerplates/tree/master/boilerplates/react-redux', folder, function(err){
        if(err)
        console.log(err)
    })
 });

program.parse(process.argv);
