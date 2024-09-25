
let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

//Imprime en la consola el nombre y el autor del segundo libro.
console.log(libros[1].titulo);
//Actualiza el número de páginas del primer libro a 350.
libros[0].paginas = 350
//Imprime en la consola la información completa del primer libro después de la actualización
console.log(libros[0]);
//Utiliza la función map para generar un nuevo array de libros que solo tenga las propiedades 
//titulo y autor, cuando imprimas tu nuevo array debe quedar de la siguiente forma:
const libro = libros.map((e)=> {
    return {titulo: e.titulo, autor: e.autor}
})
console.log(libro);

