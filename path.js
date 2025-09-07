// path merupakan standar library bawaan dari Node.js
// path digunakan untuk mengelola path file dan direktori
// contoh informasi yang bisa didapatkan dari path adalah extname, dirname, basename, dll   

import path from 'path';


const  file = "C:\\Users\\Septiannaim\\contoh.html";

console.info(path.sep);
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));