let cuentas = [
  { nombre: "Mali", saldo: 200, password: "6545"}, 
  { nombre: "Gera", saldo: 290, password: "ee89"}, 
  { nombre: "Maui", saldo: 67, password: "91pt" } 
];

document.querySelector("#persona").addEventListener("change",leerPersona)
document.getElementById("menu").style.display = "none"

function leerPersona(){
  //document.getElementById("persona").selectedIndex
  let indice = parseInt(document.querySelector("#persona").value);
  let nombre = cuentas[indice].nombre;
  let saldo = cuentas[indice].saldo;

  document.getElementById("saludo").innerHTML = "Hola," + nombre;
  document.getElementById("meter-password").style.display = "block"

}

function ingreso(){
  let indice = parseInt(document.querySelector("#persona").value);
  let nombre = cuentas[indice].nombre;
  let saldo = cuentas[indice].saldo;
  let recibida = document.getElementById("password").value;
  let contra = cuentas[indice].password;

  if (recibida === contra) {
    document.getElementById("menu").style.display = "block"
    document.getElementById("meter-password").style.display = "none"
    document.getElementById("ingresar").style.display = "none"
    document.getElementById("persona").style.display = "none"
      alert("Bienvenido")
  } else {
    document.getElementById("menu").style.display = "none"
      alert("La contraseña ingresada es incorrecta o no has llenado el campo")
  } 
  
}

document.getElementById("fAgregar").addEventListener("submit",agregar)
function agregar(e){
  e.preventDefault()
  let indice = parseInt(document.querySelector("#persona").value);
  let saldo = cuentas[indice].saldo;
  let ingresoMonto = Number(document.querySelector("#ingresoMonto").value);
  document.querySelector("#montoIngresado").innerHTML = "Tu monto ingresado es: " + ingresoMonto;    
  let totalSumado = (saldo += ingresoMonto)
  cuentas[indice].saldo = totalSumado;
  document.querySelector("#nuevoSaldo").innerHTML = "Tu monto total es: " + totalSumado;
  if (saldo >= 990) {
    alert("No puedes ingresar mas dinero, el limite maximo en al cuenta es $990 y en este momento tienes: "+ saldo)
}
}

document.getElementById("fRetirar").addEventListener("submit",retiro)
function retiro(e){
  e.preventDefault()
  let indice = parseInt(document.querySelector("#persona").value);
  let saldo = cuentas[indice].saldo;
  let saldoRetirado =  Number(document.querySelector("#ingresoMontoR").value);
  document.querySelector("#saldoRetirado").innerHTML = "Tu monto retirado es: " + saldoRetirado;
  let nuevoSaldo = saldo - saldoRetirado;
  cuentas[indice].saldo = nuevoSaldo;    
  document.querySelector("#nuevoSaldoR").innerHTML = "Tu monto total despues de retirar es es: " + nuevoSaldo; 
  if (nuevoSaldo <= 10) {
    alert("No puedes retirar mas dinero, el limite minimo en al cuenta es $10 y en este momento tienes: "+ saldo)
}
}

function consulta(){
  let indice = parseInt(document.querySelector("#persona").value);
  let saldo = cuentas[indice].saldo;
  
  document.querySelector("#saldoActual").innerHTML = "Tu saldo actual es: " + saldo;
}

function cierre() {
  window.location.reload()
}
