//__dirname shows the directory name of the current module, same of the path.dirname() of __filename
console.log(__dirname);
//This will show you where you are! Example: C:\Users\YourUser\YourRepoFolder\100-days-with-node\day2

//filename is the name of the current module/file (Not only directory) 
console.log(__filename);
//Example: C:\Users\YourUser\YourRepoFolder\100-days-with-node\day2\index.js

/*Process is a object that provides information about, and control over, the current Node.JS process
process.env return show the user enviroment*/
// {
//   TERM: 'xterm-256color',
//   SHELL: '/usr/local/bin/bash',
//   USER: 'maciej',
//   PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
//   PWD: '/Users/maciej',
//   EDITOR: 'vim',
//   SHLVL: '1',
//   HOME: '/Users/maciej',
//   LOGNAME: 'maciej',
//   _: '/usr/local/bin/node'
// } 

//process.argv returns an array with the command-line arguments passed when the NodeJS process was launched!
const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

//process.exit terminates the process with an exit status of code
// const { exit } = require('node:process');

// exit(1);
/*example of usage. According to node documentation: Calling process.exit() will force the
process to exit as quickly as possible even if there are still asynchronous operations pending 
that have not yet completed fully, including I/O operations to process.stdout and process.stderr.*/

//process.cwd() returns the Current Working Directory (cwd)
const { cwd } = require('node:process');

console.log(`Current directory: ${cwd()}`);

/*process.memoryUsage() returns an object describing the memory usage of the Node.js process measured
in bytes.*/
const { memoryUsage } = require('node:process');

console.log(memoryUsage());