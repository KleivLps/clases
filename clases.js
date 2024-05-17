//1.CLASES

//para comenzar, usamos la palabra clave CLASS seguido del nombre de la clase,cabe entender que los nombres de clase siempre empiezan con una mayuscula por ejemplo:

class Miclase {
  //contenido de la clase aca
}

//2.CONSTRUCTOR

//el constructor es un metodo especial que se ejecuta cuando se crea una instancia de clase,sirve para iniciar propiedades y realizar configuraciones iniciales

class Miclase {
  constructor(parametro1, parametro2) {
    this.propiedad1 = parametro1;
    this.propiedad2 = parametro2;
  }
}

//3. METODOS

//Puedes agregar metodos a la clase usando la sintaxis de funcion dentro de la definicion de la clase

class Miclase {
  constructor(parametro1, parametro2) {
    this.propiedad1 = parametro1;
    this.propiedad2 = parametro2;
  }
  //metodo de la clase
  miMetodo() {
    //contenido del metodo aqui
  }
}

//4.CREAR INSTANCIAS DE LA CLASE:

//Para crear una instancia de la clase, utilizamos la polabra clave NEW seguida del nombre de la clase y los parametros del constructor, si los hay:

/*const instancia = new Miclase(valor1, valor2);*/

//entonces finalmente la clase terminaria construida de la siguente manera :

//definir la clase "Persona"

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  //metodo de la clase
  saludar() {
    //contenido del metodo aca

    console.log(
      "hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años"
    );
  }
}

//creando una instancia de la clase "persona"

const persona1 = new Persona("juan", 30);

//llamando al metodo "saludar" de la instancia

persona1.saludar(); //salida: "hola, mi nombre es juan y tengo 30 años"
