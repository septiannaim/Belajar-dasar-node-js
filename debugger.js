function sayHello(name) {
    debugger; // This will trigger the debugger if it's open
    return `Hello, ${name}`;
}

const fisrtName = 'naim';

console.log(sayHello(fisrtName));

// Run this file with the Node.js debugger
// Command: node inspect debugger.js
// Then use the 'c' command to continue execution after hitting the breakpoint