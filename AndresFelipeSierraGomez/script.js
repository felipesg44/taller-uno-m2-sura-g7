//Ejercicio 1
let compras = ["Manzanas"];

compras.push("Leche", "Pan");
compras.unshift("Huevos");
compras.splice(1, 1);

console.log(compras);

//Ejercicio 2 
let tareas = ["Revisar emails"];

tareas.unshift("Llamar al cliente");
tareas.unshift("Preparar reporte");
tareas.shift();
tareas.shift();

console.log(tareas);

//Ejercicio 3 
let historial = ["google.com", "youtube.com", "facebook.com"];

historial.pop();
historial.pop();

console.log(historial);

//Ejercicio 4 
let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

colaImpresion.shift(); 
colaImpresion.push("doc4.txt"); 
colaImpresion.shift(); 

console.log(colaImpresion);

//Ejercicio 5 
let fila = ["Ana", "Luis", "Carlos", "Maria"];

fila.splice(1, 1); 
fila.splice(1, 0, "Jorge"); 

console.log(fila);

//Ejercico 6 
let mazo = ["As", "Rey", "Reina", "Jota"];

mazo.reverse(); 
mazo.shift();   

console.log(mazo);

//Ejercicio 7 
let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];

asientos.fill("Reservado", 1, 4);

console.log(asientos);

//Ejercicio 8 
let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];

productos.splice(2, 1, "Mouse Nuevo");

console.log(productos);

//Ejercicio 9
let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"];

estudiantes.sort();

console.log(estudiantes);

//Ejercicio 10 
let puntuaciones = [100, 85, 92, 78];

puntuaciones.fill(0);

console.log(puntuaciones);

//Ejercicio 11
let carrito = [];

carrito.push("Camisa", "Pantalón");
carrito.unshift("Zapatos");
carrito.splice(1, 1); 

console.log(carrito);

//Ejercicio 12 
let commits = ["v1.0", "v1.1"];

commits.push("v1.2");
commits.pop();
commits.push("v1.2-corregido");

console.log(commits);

//Ejercicio 13 
let receta = ["Paso 2: Mezclar ingredientes", "Paso 3: Hornear"];

receta.unshift("Paso 1: Pre-calentar horno");
receta.push("Paso 4: Servir");

console.log(receta);

//Ejercicio 14
let palabras = ["uno", "dos", "cuatro"];

palabras.reverse();
palabras.splice(0, 1, "tres");

console.log(palabras);

//Ejercicio 15
let equipo = ["Ana (Líder)", "Juan (Dev)", "Maria (Diseñadora)"];

equipo.splice(1, 1); 
equipo.push("Pedro (Dev)", "Luisa (Dev)");

console.log(equipo);

//Ejercicio 16
let parking = ["CarroA", "Libre", "Libre", "CarroB"];

parking.shift();
parking.splice(0, 2, "MotoA", "MotoB");

console.log(parking);
