require('dotenv').config();

let name = process.env.PROJECT_NAME;
let pc = process.env.PC;
let msg = `Esse é meu projeto white label ${name}
    Meu PC - ${pc}  
`;
console.log(msg);