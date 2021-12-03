

// let i = 0;

// while (i <= 3400){
//     console.log(i);
//     i+=7;
// }


// let nombre = prompt("Cuál es tu nombre?")
//     console.log(" Hola " +  nombre + " !!!!" )
// let numero = Math.floor(Math.random() * 11);
//     console.log("tu número de la suerte es .. " + numero + " !!!!")




while (true){
    let nombre = prompt("Cuál es tu nombre?")
    let respuesta = prompt("Hola! " + nombre + "quieres saber tu número de la suerte?  (di ´SI´ para continuar o ´NO´ para salir" )
    if(respuesta == "NO" ){
        break;
    }
    let numero = Math.floor(Math.random() * 11);
    console.log( nombre + " tu número de la suerte es .. " + numero + " !!!!")
}