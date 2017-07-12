const colors = require('colors');
const entry = process.argv[2];

const write = function() { [...arguments].forEach( arg => process.stdout.write(arg + '\n')) }
const log = function() { [...arguments].forEach( arg => process.stdout.write(colors.yellow(arg + '\n'))) }

log('========================================')
log('Entry point:\t' + entry)
log('========================================')

const read = require('fs').read;
