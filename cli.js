#!/usr/bin/env node

const make = require("./scripts/make");

const [,,...args] = process.argv;

if(!args.length) {
console.log(`Ronin CLI
Usage: ronin [cmd] [args]
    
Supported Commands: make, list, delete, test, build`);
} else if(args[0].includes('make')) {
    make(args);
}
