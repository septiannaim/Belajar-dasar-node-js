//dns merupakan starndar library bawaan dari Node.js
//dns digunakan untuk mengelola domain name system
//contoh informasi yang bisa didapatkan dari dns adalah lookup, resolve, reverse, dll

import dns from 'dns';

function callback(error , ip) {
    console.log(ip);
}

dns.lookup('www.google.com', callback);