function


function BeduCoder(nombre, curso) {
  this.nombre = nombre;
  this.curso = curso;
}

BeduCoder.prototype.startCoding = function() {
  console.log(
    `Hola me llamo ${this.nombre} y estoy en el curso de ${this.curso}`
  );
};

var helena = new BeduCoder("Helena", "Front-end");
var carlos = new BeduCoder("Carlos", "Front-end");

helena.startCoding();
