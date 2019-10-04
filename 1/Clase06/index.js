let perro = {
  nombre: "Lolo",
  apellido: "Gomo",
  raza: "pitbull",
  correr() {
    console.log(`su nombre es :  ${this.nombre} `);
  }
};
//se agrega mas propiedades al Objecto
perro["edad"] = 3;
perro["live"] = true;
// se elimina una propiedad del Objeto
delete perro.edad;
// preguntar si existe una propiedad

"raza" in perro;
// mostrar todos las propiedades
for (let element in perro) {
  console.log(element);
}

for (let element in perro) {
  if (perro.hasOwnProperty(element)) {
    console.log(element);
  }
}
//copiar un objeto 
let perro2 = Object.assign({},perro);
// recoger objetos
Object.keys(perro2)
Object.values(perro2)

