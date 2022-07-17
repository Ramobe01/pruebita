//TIMEOUT

// function myFunction(saludo,nombre){
//     console.log(saludo + nombre);
// }

// setTimeout(function() {myFunction('Hola','Miguel'); },3000);

//INTERVAL


// setInterval(darHora,1000);

// function darHora(){
//     let reloj = new Date();
//     let horas = (reloj.getHours()).toString();
//     let minutos = (reloj.getMinutes()).toString();
//     let segundos = (reloj.getSeconds()).toString();
    
//     if (horas.length == 1){
//         horas = '0' + horas;
//     } 
//     if (minutos.length == 1){
//         minutos = '0' + minutos;
//     } 
//     else if (segundos.length == 1){
//         segundos = '0' + segundos;
//     }
    
//     console.log(horas + ':' + minutos + ':' + segundos);
// }

let nombre = 'Miguel/';

try{
    for (let i of nombre){
        console.log(i);
        if(!(isNaN(i))){
            throw 'Se deben ingresar solo letras'
        }
    }
    console.log(nombre);
}
catch(err){
    console.log(err);
}

// for (let i of nombre){
//     console.log(i);
//     if(!(isNaN(i))){
//         console.log(i);
//     }
// console.log('nombre');
// }
