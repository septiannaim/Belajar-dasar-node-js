function samplePromise() {
    return Promise.resolve("naim");
}


const name = await samplePromise();
console.info(name);