import {EventEmitter} from "events";
// mengimporr modul events

const emitter = new EventEmitter();
// membuat objek event emitter


emitter.addListener("greet", (name) => {
    console.info(`hello ${name}`);
});

emitter.addListener("greet", (name) => {
    console.info(`haii ${name}`);
});
emitter.emit("greet", "naim");
// menambahkan listener untuk event greet
// menambahkan listener kedua untuk event greet
// memicu event greet dengan argumen 'naim'