// import dns promise dari node.js
import { promises as dns } from 'dns';

const lookup = await dns.lookup('www.google.com');


console.info(lookup.family);
console.info(lookup.address);