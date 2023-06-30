let cuentas = [
    { nombre: "Mali", saldo: 200, password: "6545"}, 
    { nombre: "Gera", saldo: 290, password: "ee89"}, 
    { nombre: "Maui", saldo: 67, password: "91pt" } 
  ];
  
  document.querySelector("#persona").addEventListener("change",leerPersona)
  document.getElementById("menu").style.display = "none"
  
  function leerPersona(){
    let indice = parseInt(document.querySelector("#persona").value);
    let nombre = cuentas[indice].nombre;
    let saldo = cuentas[indice].saldo;
  
    document.getElementById("saludo").innerHTML = "Hola, " + nombre;
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
        alert("no sirve")
    } 
    
  }
    
  
  
  function consulta(){
    let indice = parseInt(document.querySelector("#persona").value);
    let nombre = cuentas[indice].nombre;
    let saldo = cuentas[indice].saldo;
    
    document.querySelector("#saldoActual").innerHTML = "Tu saldo actual es: " + saldo;
  }
  
  
  function agregar(){
    let indice = parseInt(document.querySelector("#persona").value);
    let nombre = cuentas[indice].nombre;
    let saldo = cuentas[indice].saldo;
    let ingresoMonto =  document.querySelector("#ingresoMonto").value;
    document.querySelector("#montoIngresado").innerHTML = "Tu monto ingresado es: " + ingresoMonto;    
    let totalSumado = Number(saldo +=  ingresoMonto)
    document.querySelector("#nuevoSaldo").innerHTML = "Tu monto total es: " + totalSumado;
  
    if (saldo >= 990) {
      alert("No puedes ingresar mas dinero, el limite maximo en al cuenta es $990 y en este momento tienes: "+ saldo)
  }
  }
  
  
  function retiro(){
    let indice = parseInt(document.querySelector("#persona").value);
    let nombre = cuentas[indice].nombre;
    let saldo = cuentas[indice].saldo;
  
    let saldoRetirado =  document.querySelector("#ingresoMontoR").value;
    document.querySelector("#saldoRetirado").innerHTML = "Tu monto retirado es: " + saldoRetirado;    
    let nuevoSaldo = saldo - saldoRetirado ;
    document.querySelector("#nuevoSaldoR").innerHTML = "Tu monto total despues de retirar es es: " + nuevoSaldo; 
    
    if (nuevoSaldo <= 10) {
      alert("No puedes retirar mas dinero, el limite minimo en al cuenta es $10 y en este momento tienes: "+ saldo)
  }
  }