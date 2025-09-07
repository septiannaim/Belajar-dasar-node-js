function samplePromise() {
    return Promise.resolve("naim");
}

//masih bisa dipake karena nodejs versi 18 keatas 
//sudah berevolusi 
//Node.js v16 (stabil) → resmi dukung Top-Level Await (TLA) di ESM.
//Node.js v20+ → .js yang di-set sebagai ESM lewat "type": "module" bisa langsung pakai TLA, sama kaya .mjs.
const name = await samplePromise();
console.info(name);