#! /usr/bin/env node

// Select "new" as the command
process.argv.splice(2, 0, 'new');

require('roc/bin/cli');
