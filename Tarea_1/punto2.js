const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

//Calcula la suma de las edades de todos los estudiantes en el array
resultado = 0
for (let i = 0; i < estudiantes.length; i++) {
    resultado = estudiantes[i].edad + resultado
}
//Calcula el promedio de edad de los estudiantes.
const media = resultado/estudiantes.length
console.log( 'la suma de las edades de todos los estudiantes es ', resultado , ' y el promedio de edad de los estudiantes es  ', media);


