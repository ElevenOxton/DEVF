function enviar() {
    const nombre = document.getElementById("nombre").value
    const imagen = document.getElementById("imagen").value
    const numero = document.getElementById("numero").value
 
    document.getElementById("titulo").innerHTML = nombre;
    document.getElementById("descripcion").innerHTML = "su numero es: "+ numero;
    document.getElementById("foto").src = imagen;

    console.log(nombre,imagen,numero)
}