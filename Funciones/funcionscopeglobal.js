const varGlobal = 1000;

function saludar() {
    console.log(varGlobal);
}

function sumar() {
    console.log(1 + varGlobal);   
}

function despedirse() {
    console.log("Adios por "+ varGlobal);    
}

saludar();
sumar();
despedirse();
console.log(varGlobal)