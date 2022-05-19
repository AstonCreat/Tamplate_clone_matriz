require('dotenv').config();

let name = process.env.PROJECT_NAME;
let pc = process.env.PC;
let ip = process.env.IP;
let msg = `Esse é meu projeto white label ${name}
    Meu PC - ${pc} 
    Meu IP - ${ip}
`;
console.log(msg);