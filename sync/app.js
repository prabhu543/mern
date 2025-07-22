// fs module

// const fs = require('fs');
// const read = fs.readFileSync
// const write = fs.writeFileSync

// instead of ☝🏻 do 👇
const { readFileSync, writeFileSync } = require('fs');

const read = readFileSync('./simple/second.txt','utf-8')
writeFileSync('./simple/second.txt', read, {flag : 'a'})
console.log(read)