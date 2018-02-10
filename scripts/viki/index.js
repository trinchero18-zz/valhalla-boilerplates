#!/usr/bin/env node
const fs = require('fs-extra'),
    path = require('path'),
    program = require('commander');

program
 .command('init <param>')
 .description('Init react-redux boilerplate')
 .action((param) => {
    let folder = path.join( process.cwd() , param ? param : './valhalla-boilerplate-react');
    
    fs.copy(path.join(__dirname, '../../boilerplates/react-redux'), folder)
        .then(() => console.log('Success!'))
        .catch(err => console.error(err))
    
 });

program.parse(process.argv);
