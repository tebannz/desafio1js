// Texto alternativo generado por el equipo:
let jugador= prompt( ' ingrese 1: tijeras, 2:piedra, 3:papel')
jugador = parselnt( jugador); 
//(Ahora el computador jugará aleatoriamente 
let computador = Math.floor(Math.random() *3 ) +1; 
console. log( 'valor del computador: ',computador); 
if((jugador==l) && (computador==l)) { 
    alert('empate'); 
} else if ((jugador==2) && (computador==2)) { 
    alert('empate' ) ; 
}else if ((jugador=3) && (computador==3)) { 
    alert('empate' ) ; 
}else if ((jugador==l) (computador==2)) { 
    alert('computador gana' ) ; 
}else if ((jugador==l) && (computador=3)) { 
    alert('jugador gana' ) ; 
}else if ((jugador==2) && (computador==l)) { 
    alert(' jugador gana' ) ; 
}else if ((jugador==2) (computador==3)) { 
    alert(' computador gana') ; 
}else if ( (jugador=3) && (computador==1)) {  
    alert('computador gana') ; 
}else if ((jugador=3) && (computador==2)) { 
    alert( ' jugador gana' ) ; 
}