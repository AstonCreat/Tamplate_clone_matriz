require('dotenv').config();

let name = process.env.PROJECT_NAME;
let msg = `Esse é meu projeto white label ${name}`;
console.log(msg);