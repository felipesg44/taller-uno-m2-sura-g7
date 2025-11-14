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