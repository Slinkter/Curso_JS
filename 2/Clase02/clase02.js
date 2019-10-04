let usuario1 = {
  nombre: "Liam Cave",
  email: "liam@cave.com",
  edad: 25
};

let nombre_Usuario1 = usuario1["nombre"];

//Creacion de la Clase usuario
class Usuario {
  constructor(name, last, mail, age) {
    this.name = name;
    this.last = last;
    this.mail = mail;
    this.age = age;
  }
}

let u = new Usuario("Liam","cave","liam@cave",26);
console.log(u);
