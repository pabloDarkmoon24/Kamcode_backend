//crear un programa que sea capaz de recorrer el array estudiantes de el punto 2 y encontrar a el/la 
//estudiante con el mayor promedio, utilizando un bucle for o cualquer otro método visto en clase

const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

valorEstudiantePromedioMayor = 0
estudiantePromedioMayor =[]

for (let estudiante of estudiantes) {
    if (estudiante.promedio > valorEstudiantePromedioMayor ){
        valorEstudiantePromedioMayor = estudiante.promedio
        estudiantePromedioMayor= estudiante
    }
    
}
console.log(estudiantePromedioMayor);
