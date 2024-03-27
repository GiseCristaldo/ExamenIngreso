//Ejercicio:


//Crear una función que reciba como parámetro una nota y retorne una de estas 3 palabras:
// LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

//Nota es menor a 4 - LIBRE
//Nota es menor a 7 y no es LIBRE - REGULAR 
//Nota mayor que 6  - PROMOCIONADO.

let nota = parseInt(prompt('Ingrese su nota <los números aceptados van del 1 al 10>'));

function promedios(nota){


    if (nota < 4){
       return console.log('Su nota es,', nota, 'esta LIBRE')
    }
    if (nota !== 3 && nota !== 2 && nota !==1 && nota <=6){
        return console.log('Su nota es, ',nota,' esta REGULAR')
     }
     if (nota > 6 ){
        return console.log('Su nota es, ',nota,' esta PROMOCIONADO')
     }
    
} 
console.log(promedios(nota))