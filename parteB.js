//En base al trabajo realizado en la parte A, realiza las modificaciones necesarias 
//para satisfacer los requerimientos que se detallan a continuación.

//* Mejorar el ejercicio anterior agregando un return de mensaje de error si la nota 
//es menor que 1 o mayor que 10.



function promedios(nota){

    if (nota <= 0 || nota > 10){

        console.log('El número ingresado no es correcto, por favor ingrese un número entre el 1 y el 10')
    }
    if (nota < 4 && nota !== 0){
       return console.log('Su nota es,', nota, 'esta LIBRE')
    }
    if (nota !== 3 && nota !== 2 && nota !== 0 && nota !==1 && nota <=6){
        return console.log('Su nota es, ',nota,' esta REGULAR')
     }
     if (nota > 6 && nota <=10 ){
        return console.log('Su nota es, ',nota,' esta PROMOCIONADO')
     }
    
} 
console.log(promedios(8))