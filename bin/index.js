#!/usr/bin/env node

const commander = require('commander');
const processes = require('child_process');
const fs = require('fs');
const path = require('path')

const settings = require('./settings.js')
const server = require('./server.js')


const program = new commander.Command();

const ROOT_DIR = process.cwd()


/*
 *  COMMANDS
 */

program
    .command('runserver')
    .description('Run the Jsango dev server')
    .option('-s, --settings <filepath>', 'Specify a custom settings filepath', './settings.js')
    .action(async function(cmd) {
        const configPath = path.join(ROOT_DIR, cmd.settings)
        const config = require(configPath)
        server.runDevServer(ROOT_DIR, config)
    })


// Found in package.json
program.version('0.0.1');

// Run the CLI tool
program.parse(process.argv);
