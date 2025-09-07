//file system merupakan standar library bawaan dari Node.js
//file system digunakan untuk mengelola file dan direktori
//contoh informasi yang bisa didapatkan dari file system adalah readFile, writeFile, appendFile, dll    
//dalam file system terdapat dua jenis yaitu synchronous dan asynchronous
//perbedaan antara synchronous dan asynchronous adalah synchronous akan menunggu proses selesai sebelum melanjutkan ke proses berikutnya

import fs from 'fs';

const buffer = fs.readFileSync('file-system.js'); 

console.info(buffer.toString());

fs.writeFileSync('tempt.txt', 'Hello World dari Node.js');  
