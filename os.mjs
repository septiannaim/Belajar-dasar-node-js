//os adalah merupakan libarary bawaan dari Node.js
//os adalah singkatan dari operating system
//os digunakan untuk mendapatkan informasi tentang sistem operasi yang sedang digunakan
//contoh informasi yang bisa didapatkan dari os adalah platform, cpu, memory, dll

import os from 'os';

console.info(os.platform());
console.table(os.cpus());   
console.info(os.totalmem());
console.info(os.freemem());
console.info(os.homedir());
console.info(os.hostname());


console.table(os.networkInterfaces());
console.table(os.networkInterfaces() ); //untuk melihat informasi tentang wifi yang sedang digunakan
