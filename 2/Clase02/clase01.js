const clienteEdTeam = {
    nombre : "Liam",
    apellido : "Cave",
    edad : 26,
    email : "liam@cave.com",
    pass : "dasdas"
}
// acceso 1
console.log(clienteEdTeam.nombre);
//acceso 2 
console.log(clienteEdTeam["nombre"]);

let na = "nom";
let me = "bre";
const table = {
    [`${na}${me}`] : "Liam123"
}

console.log(table);

console.log(clienteEdTeam);

// Cliente GYM

const clientGym = {
    nombre : "Jhonny",
    edad : 26,
    peso : 88.9,
    altura : 170,
    fRegistro : '22/07/2018'
}

const clientes = [clienteEdTeam,clientGym];
