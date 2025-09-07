# Node.js, Thread Pool, Concurrency, dan Parallelism

## Node.js
Node.js adalah runtime JavaScript berbasis event-driven dan non-blocking I/O. Node.js sangat efisien untuk aplikasi yang membutuhkan banyak operasi I/O seperti web server, API, dan aplikasi real-time.

## Event Loop di Node.js
Event loop adalah inti dari arsitektur Node.js. Event loop memungkinkan Node.js untuk menangani banyak permintaan secara bersamaan tanpa membuat thread baru untuk setiap permintaan. Event loop akan terus berjalan, memeriksa antrian event/callback, dan mengeksekusi callback satu per satu secara non-blocking. Dengan cara ini, Node.js dapat menangani ribuan koneksi secara efisien pada satu thread utama.

Ilustrasi sederhana event loop:
```js
console.log('Mulai');

setTimeout(() => {
  console.log('Timeout selesai');
}, 1000);

console.log('Selesai');
```
Output:
```
Mulai
Selesai
Timeout selesai
```
Pada contoh di atas, `setTimeout` diproses secara asynchronous oleh event loop, sehingga baris "Selesai" dieksekusi sebelum "Timeout selesai".

## Thread Pool di Node.js
Node.js menggunakan single-threaded event loop untuk menangani sebagian besar operasi. Namun, untuk operasi yang berat (misal: file system, enkripsi, kompresi), Node.js memanfaatkan **thread pool** melalui library [libuv](https://libuv.org/). Secara default, thread pool ini berisi 4 thread, namun bisa diubah dengan environment variable `UV_THREADPOOL_SIZE`.

Contoh penggunaan thread pool:
```js
const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```
Operasi `readFile` di atas dijalankan di thread pool, sehingga tidak memblokir event loop utama.

## Concurrency vs Parallelism

- **Concurrency**: Kemampuan untuk menangani beberapa tugas secara bersamaan (interleaved), meskipun tidak benar-benar berjalan pada waktu yang sama. Node.js sangat baik dalam concurrency melalui event loop.
- **Parallelism**: Kemampuan untuk menjalankan beberapa tugas secara benar-benar bersamaan (simultan), biasanya dengan banyak thread atau core CPU. Di Node.js, parallelism dapat dicapai dengan thread pool atau modul seperti `worker_threads`.

## Contoh Parallelism dengan Worker Threads

```js
const { Worker } = require('worker_threads');

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}
```

## Referensi
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [libuv Thread Pool](https://nodejs.org/en/docs/guides/thread-pool/)