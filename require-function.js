// function require adalah function yang ada di Node.js
// function ini digunakan untuk mengimpor module yang ada di Node.js
// module yang ada di Node.js disebut juga dengan built-in module
// contoh built-in module adalah path, fs, http, os, dll

const os = require('os');

console.info(os.platform());
console.table(os.cpus());