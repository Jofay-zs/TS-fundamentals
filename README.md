# Fundamentos de TypeScript

![wallpaper of TypeScript](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F2000%2F1*i0qclSPNcjj8cWOPr3wLxg.png&f=1&nofb=1)

## Acerca del repositorio

En este repositorio podras encontrar las notas y codigos que fui realizando durante mi aprendizaje de TS. La mayoria del contenido lo obtuve de [Platzi](https://platzi.com/clases/typescript/) y de la [documentacion oficial de TS](https://www.typescriptlang.org/).

## Index

- [Que es TypeScript ?](#que-es-typescript)
  - [Porque usar TypeScript?](#porque-usar-typescript)
- [El compilador de TS](#el-compilador-de-ts)
  - [El archivo de configuracion de TS](#el-archivo-de-configuracion-de-ts)
- [Tipado en TS](#tipado-en-ts)
  - [Tipo Number](#number)
  - [Tipo Boolean](#boolean)
  - [Tipo String](#string)
  - [Tipo Any](#any)
  - [Tipo Void](#void)
  - [Tipo Never](#never)
  - [Tipo Null](#null)
  - [Tipo Undefined](#undefined)
  - [Tipo object & Object](#object-vs-object)
  - [Tipo Array](#array)
  - [Tipo Tuple](#tuple)
  - [Tipo Enum](#enum)
- [Union de tipos](#union-de-tipos)
- [Alias de tipos](#alias-de-tipos)
- [Tipos literales](#tipos-literales)
- [Aserciones de tipos](#aserciones-de-tipos)
- [Funciones en TS](#funciones-en-ts)
- [Interfaces](#interfaces)
  - [Propiedades opcionales](#propiedades-opcionales)
  - [Propiedades de solo lectura](#propiedades-de-solo-lectura)
  - [Extendiendo interfaces](#extendiendo-interfaces)
- [Clases](#clases)
  - [Miembros publicos y privados](#miembros-publicos-y-privados)
  - [Metodos Set y Get](#metodos-set-y-get)
  - [Herencia de clases y miembros protegidos](#herencia-de-clases-y-miembros-protegidos)
  - [Clases abstractas](#clases-abstractas)
  - [Propiedades estaticas y propiedades de solo lectura](#propiedades-estaticas-y-propiedades-de-solo-lectura)
- [Modulos](#modulos)

# Que es TypeScript

[Index](#index)

- Lenguaje de Programacion tipado
- Lenguaje de alto nivel
- Genera como resultado codigo JavaScript
- Codigo abierto
- Desarrollo en cualquier Sistema Operativo
- El codigo puede ejecutarse en cualquier navegador o plataforma

## Porque usar TypeScript

[Index](#index)

- Programacion orientada a objetos
- Potencia tu codigo JS
- Mayor productividad
- Poderoso sistema de tipos
- Compila a ES5, ES6 y mas
- Proyecto Open Source y muy activo
- Tiene actualizaciones periodicas
- Tiene una gran comunidad, la cual cada vez mas crece
- Puede prevenir cerca del 15% de bugs

## El compilador de TS

[Index](#index)

> **Instalacion -->** npm install -g typescript

Cuando creas tu archivo .ts, la forma en que se ejecuta es con su compilador. Es decir pones en la termial tsc **_nombreDelArchivo_**. Una vez ejecutes este comando correra tu archivo ts y por consecuencia creara su equivalente en un archivo js.

### -- watch

Con el comando

> tsc --watch **_nombreDelArchivo_**

Se ejecutara un servicio que estara mirando constantemente los cambios que se van dando en el archivo .ts

# El archivo de configuracion de TS

[Index](#index)

El tsconfig.json permite especificar la raiz de un proyecto TS, tambien nos permite configurar las opciones para el compilador.

**Como lo puedo generrar?** Si deseas generar este archivo solo debes de ejecutar el siguiente comando:

> tsc --init

# Tipado en TS

[Index](#index)

- **Explicito:** Define una sintaxis para la creacion de variables con tipo de dato.
- **Inferido:** TypeScript tiene la habilidad de deducir el tipo de dato a partir de un valor asignado a una variable.

## Tipado Explicito

> **_nombreVariable_** **:** **_tipoDato_**
>
> > Los dos puntos nos permiten expecificar el tipo de dato

## Tipado Implicito

> **_nombreVariable_** **=** **_valor_**
>
> > Typescript puede deducir el tipo de dato, pero para esto la variable debe de estar inicializada

---

## Tipos primitivos

|        |           |        |        |
| ------ | --------- | ------ | ------ |
| Number | Boolean   | String | Array  |
| Tuple  | Enum      | Any    | Void   |
| Null   | Undefined | Never  | Object |

# number

[Index](#index)

- Valores numericos
- Valores hexadecimales
- Valores binarios
- Valores octales

## Numerico

```ts
// NUMBER

// Explicito
let age: number;
age = 16;

// Implicito
let height = 1.8;
```

## Hexadecimales

Este es un valor de tipo numerico y para especificar que es un hexadecimal hacemos uso de la notacion "= 0x" y a continuacion el valor hexadecimal.

```ts
// HEXADECIMALS
let hexa: number = 0xf5f5f5;
```

## Binario

Para definir que nuestra variable tiene un valor binario se usa la notacion "= 0b" y a continuacion el valor binario.

```ts
// BINARIOS
let binary: number = 0b1010001;
```

## Octal

Para definir que nuestra variable tiene un valor octal se usa la notacion "= 0o" y a continuacion el valor octal.

```ts
// OCTALES
let octal: number = 0o1234567;
```

# boolean

[Index](#index)

Solo tiene dos tipos de valores, true or false.

```ts
let isStudent: boolean;
isStudent = true;

let isRed = false;
```

# string

[Index](#index)

- Para valores textuales o cadenas.
- Se puede utilizar tanto "", '' o ``

```ts
let userName: string;
userName = "Jofay";

let userLastName = "zs";

let userInfo: string;
userInfo = `
    User Name: ${userName}
    User Last Name: ${userLastName}
`;
```

# any

[Index](#index)

![TS meme](https://static.platzi.com/media/user_upload/r_3015646_HZCi4-c560ea48-f8bb-43c8-a43e-bc61df33b4d1.jpg)

- Usado para capturar valores dinamicos
- Los valores pueden cambiar de tipo en el tiempo

```ts
// Explicito
let idUser: any;
idUser = 1;
idUser = "nuevo dato";

// Implicito
let something; //<-- Tipo any
```

Como puedes ver esto no dara error, ya que el tipo de dato es any, permitiendonos que cambie de tipo cuando desee. Esto no es muy bueno ya que es como quitarle esa caracteristica especial a TS y solo debe ser usado en casos muy especificos.

# void

[Index](#index)

- Void es lo opuesto a any representa la ausencia de tipo
- Comunmente se usa como tipo de retorno en funciones

```ts
// VOID
// Tipo explicito
function showInfo(user: any): void {
  console.log("User information:", user.id, user.userName, user.userLastName);
}
// A a funcion de arriba se le tiene asignado un tipo
// de retorno void, ya que no se esta retornando nada.

showInfo({ id: 65456, userName: "Pedro", userLastName: "Metapod" });

// Tipo implicito
function showCar(car: any) {
  console.log("Colors:", car.brand, car.color, car.price);
}

showCar({ brand: "Tesla", color: "Red", price: "50000" });
```

# never

[Index](#index)

- Representa el tipo de valor que nunca ocurre
- Algunos casos en los que se puede utilizar este tipo son:
  - Funciones que lanzan exepciones
  - Funciones que nunca retornan un valor

```ts
// NEVER

function handleError(code: number, message: string): never {
  throw new Error(`${message}. Code: ${code}`);
}
// En esta funcion especificamos que nunca se devolvera ningun
// valor, sino que propaga un error.

try {
  handleError(404, "Not found");
} catch (error) {}
```

# null

[Index](#index)

```ts
// NULL

// Explicito
let nullValue: null;
nullValue = null;

// Implicito
let nullDigit = null;
// En este caso TS infiere que esta variable es de tipo any,
// por lo que puede contener un valor diferente a null
```

# undefined

[Index](#index)

```ts
// UNDEFINED
// Explicito
let undefinedData: undefined;
undefinedData = undefined;

// Implicito
let undefinedValue = undefined;
// En este caso pasa lo mismo que en null y es que TS infiere
// que es de tipo void
```

> **Null y undefined se pueden asumir como subtipos de los otros tipos de datos. Lo cual significa que se puede asignar null y undefined a una variable de tipo string, number u otros tipos. Pero para esto la opcion strict en el tsconfig debe de estar deshabilidata.**

# Object vs object

[Index](#index)

- object es el tipo de dato que representa un valor no primitivo
- Es el tipo para variable que no sea number, string, boolean, null, undefined, etc.
- **Object**: instancia de la clase object de JS
- **object**: tipo para valores no primitivos, con este tipo no se puede acceder a las propiedades del objeto

```ts
// object
let user: object;
user = {};

user = {
  id: 1,
  userName: "Jofay",
  userLastName: "zs",
  isStudent: true,
};

console.log(user);
// console.log(user.userName)
// El codigo de arriba dara error, ya que TS no permite
// acceder a los datos de dicho objeto, mas adelante veremos porque.

// Cuando creamos un objeto de forma implicita, TS inferira que es
// de tipo Object
let myInfo = {
  id: 1,
  userName: "Jofay",
  userLastName: "zs",
  isStudent: true,
};

console.log(myInfo.id);

// Con instanceOf podemos verificar si una variable es de cierto tipo o no
const isObject = myInfo instanceof Object;
console.log(isObject); //true
```

# array

[Index](#index)

- Al igual que JS, TS permite definir un arreglo para contener un conjunto de valores.
- Usa dos notaciones:

```
[] y Array<tipo>
```

```ts
// Array []

// Explicito
let names: string[];
names = ["Elon", "Freddy", "Shu", "Annie"];
// users = [123, false] <-- Error

// Inferido
let numbers = [12, 34, 763, 16, 19];
// numbers = ["someText", true] < --Error;

//Array<tipo>

// Explicito
let jsFrameworks: Array<string>;
// proLang = [12,true] <-- Error
jsFrameworks = ["React", "Next", "Vue", "Angular"];

// Accediendo a valores
console.log(names[0]);
console.log(numbers[4]);
console.log(jsFrameworks[1]);

// Propiedades en array
console.log(jsFrameworks.length);

// Uso de funciones
names.push("Jofay");
names.sort();
console.log(names);
```

# tuple

[Index](#index)

- Las tuplas permiten expresar un arreglo con un numero fijo de elementos
- Los tipos de datos son conocidos

```ts
// Tuplas
let sentence: [string, number, string];
sentence = ["I have", 45, "apples"];
console.log(sentence);
console.log(sentence[2]);

// Arreglo de tuplas
let dogs: [string, number][] = [];
dogs.push(["Hercules", 6]);
dogs.push(["Bruce", 9]);
dogs.push(["Kit", 9]);

dogs[2][0] = dogs[2][0].concat("ten");

console.log(dogs);
```

# enum

[Index](#index)

- Los enumarados permiten definir un conjunto de constantes con nombre.
- Tienen la ventaja de adaptarse al contexto de la aplicacion.

```ts
// Enums

enum Polygons {
  Circle = 0,
  Triangle = 3,
  Square = 4,
  Pentagon,
}

const myShape01: Polygons = Polygons.Square;
console.log(myShape01);
console.log(Polygons.Square);
console.log(Polygons[myShape01]);

// Cuando declaras enums numericos si no declaramos algun valor este tomara el mismo
// valor del valor anterior y le suma 1. Como se muestra en el siguiente console.log()
console.log(Polygons.Pentagon);

enum Antonyms {
  Happy = "Sad",
  Mad = "Appeased",
  Wet = "Dry",
  Alive = "Dead",
}

const myStatus: Antonyms = Antonyms.Happy;
console.log(myStatus);
```

# Union de tipos

[Index](#index)

- En TS se puede definir una variable con multiples tipos de datos: Union Type
- Se usa el simbolo de pipe "|" entre los tipos

```ts
// Union de tipos
let myNumber: number | string;
myNumber = 9;
myNumber = "nine";

// Como podemos ver la union de tipos nos permite declarar
// que cierta variable podra recibir diferentes tipos previamente
// definidos

let idUser: number | string;
idUser = "10";

const getUserNameById = (id: number | string) => {
  return "Jofay";
};

getUserNameById(9);
getUserNameById("9");
```

# Alias de tipos

[Index](#index)

- TS permite crear un alias como nuevo nombre para tipo
- El alias se puede aplicar tambien a un conjunto o combinacion de tipos
- Se usa la palabra reservada type

```ts
// Alias de tipos

type UserId = number | string;
type UserName = string;

let idUser: UserId;
idUser = "10";

const getUserNameById = (id: UserId): UserName => {
  return "Jofay";
};

getUserNameById(9);
getUserNameById("9");
```

# Tipos literales

[Index](#index)

- Una variable con un tipo literal puede contener unicamente una cadena del conjunto.
- Se usan cadenas como "tipos", combinados con el simbolo de pipe "|" entre ellos

```ts
// Tipos literales

type SquareSize = "100x100" | "500x500" | "1000x1000";

// let myPhotoProfile: SquareSize = "200x200"
// <-- Error ya que este valor no es parte del tipo
let myPhotoProfile: SquareSize = "500x500";
const myBackground: SquareSize = "1000x1000";
```

# Aserciones de Tipos

[Index](#index)

- Cuando el programador puede conocer mas que TS sobre el valor de una variable.
- Usa dos sintaxis:

```
<AngleBracket> and (Variable as type)
```

```ts
// Aserciones de tipo

// <>
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// as
const otherCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

Cuando TS no sabe que tipo esta manejando se puede hacer uso de las aserciones, las cuales le dicen al compilador que tipo de dato es el que esta usando. En el ejemplo de arriba TS no sabe que tipo le esta trayendo el getElementById y es por esto que nosotros se lo especificamos.

> Ahora entiendo mejor el [meme](#any)

# Funciones en TS

[Index](#index)

- Los parametros en las funciones son tipados
- Se peuden definir parametros opcionales
- El tipo de retorno puede ser un tipo basico, enum, alias, tipo literal o una combinacion de ellos.

## Parametro opcional

Cuando declaramos una funcion le podemos pasar parametros opcionales, los cuales a la hora de ser llamada la funcion no es necesario declararlo. Este se declara poniendo el signo "?" en frente del parametro.

```ts
// Funciones en TS

type SquareSize = "100x100" | "500x500" | "1000x1000";

const createPicture = (
  title: string,
  date: Date,
  size: SquareSize,
  authorName?: string // Usando un parametro opcional
) => {
  return {
    title,
    date,
    size,
    authorName,
  };
};

const firstPicture = createPicture(
  "El cuadrito",
  new Date(),
  "1000x1000"
  // En este punto tendriamos un error por no declarar el
  // ultimo parametro, pero esto no sucede por haberlo definido
  // como opcional
);

console.log(firstPicture);
```

## Tipo de retorno con TS

```ts
function handleError(code: number, message: string): never | string {
  if (message === "error") {
    throw new Error(`Error: ${message}. Error-code:${code}`);
  } else {
    return "An error has ocurred";
  }
}
try {
  let result = handleError(200, "Ok");
  console.log(result);
  result = handleError(404, "error");
  console.log(result);
} catch (error) {}
```

# Interfaces

[Index](#index)

Las interfaces en TS constituyen una forma poderosa de definir "contratos" tanto para tu proyecto, como para el codigo externo del mismo

```ts
//Interfaces

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: Date;
  orientation: PhotoOrientation;
}

const showPicture = (picture: Picture) => {
  console.log(`Your picture have the next features:
  - Title: ${picture.title}
  - Publication date: ${picture.date}
  - Size: ${picture.orientation}`);
};

let myPicture = {
  title: "jaja",
  date: new Date(),
  orientation: PhotoOrientation.Panorama,
};

showPicture(myPicture);
```

## Propiedades opcionales

[Index](#index)

Para definir propiedades opcionales es de la misma forma que lo hicimos en [Parametro opcional de una funcion](#parametro-opcional)

En el siguiente ejemplo te lo demuestro:

```ts
type Author = {
  userName: string;
  userLastName: string;
  age: number;
};

enum Status {
  Aprobado,
  Rechazado,
  Pendiente,
}

interface Research {
  // Declaramos description y budget como opcionales
  description?: string;
  budget?: number;
  leadBy: Author;
  researchStatus: Status;
}

const registerResearch = (research: Research) => {
  return research;
};

const myUser: Author = {
  userName: "Jofay",
  userLastName: "zs",
  age: 16,
};

const test = registerResearch({
  leadBy: myUser,
  researchStatus: Status.Aprobado,
});

console.log(test);
```

## Propiedades de solo lectura

[Index](#index)

Algunas propiedades de la interfaz podrian no ser modificables una vez creado el objeto. Esto es posible usando readonly antes del nombre de propiedad.

readonly nos permite definir una propiedad, la cual una vez definida su valor no podra ser cambiado.

```ts
type Author = {
  userName: string;
  userLastName: string;
  age: number;
};

enum Status {
  Aprobado,
  Rechazado,
  Pendiente,
}

interface Research {
  // Definimos que la descripcion sera readonly
  readonly description?: string;
  budget?: number;
  leadBy: Author;
  researchStatus: Status;
}

let myUser: Author = {
  userName: "Jofay",
  userLastName: "zs",
  age: 16,
};

let notEditable: Research = {
  description: "This is a short description about my new research",
  budget: 45000,
  leadBy: myUser,
  researchStatus: Status.Pendiente,
};

console.log(notEditable);

// Esta linea de codigo resultara en un error, ya que la propiedad
// description fue previamente definida como readonly.
// notEditable.description =
//   "I change my description, because I didn't like the previous one";

// En este caso no tenemos error, ya que budget no fue definido como readonly
notEditable.budget = 90000;

console.log(notEditable);
```

## Extendiendo interfaces

[Index](#index)

Las interfaces pueden extenderse unas de otras. Esto permite copiar los miembros ya definidos en una interfaz a otra, ganando flexibilidad y reusabilidad de componentes.

```ts
enum TypesOfArt {
  Painting,
  Sculpture,
  Architecture,
  Music,
  Dance,
  Coding,
}

type Author = {
  userName: string;
  userLastName?: string;
  age?: number;
};

interface Art {
  artName: string;
  artType: TypesOfArt;
  artAuthor: Author;
}

interface Painting extends Art {
  size: string;
  sold: boolean;
  predominantColor: number;
}

interface Music extends Art {
  instruments: string[];
}

const Devorack: Author = {
  userName: "Devorack",
};

// Este bloque de codigo sacara un error, ya que le faltan
// las propiedades extendidas por Art

// let firstMusic: Music = {
//   instruments: [],
// };

let firstMusic: Music = {
  instruments: ["every instrument", "that you can play", "at the opera"],
  artName: "Symphony No.9",
  artType: TypesOfArt.Music,
  artAuthor: Devorack,
};

console.log(firstMusic);
```

# Clases

[Index](#index)

```ts
// Clases
enum TypesOfArt {
  Painting = "Painting",
  Sculpture = "Sculpture",
  Architecture = "Architecture",
  Music = "Music",
  Dance = "Dance",
  Coding = "Coding",
}

class Art {
  artName: string;
  artType: TypesOfArt;
  artAuthor: string;

  constructor(artName: string, artType: TypesOfArt, artAuthor: string) {
    (this.artName = artName),
      (this.artType = artType),
      (this.artAuthor = artAuthor);
  }

  showMyArt() {
    return `Hi, my name is ${this.artAuthor} and today I will show you a ${this.artType} type art, its name is ${this.artName}`;
  }
}

const sun = new Art("Sun", TypesOfArt.Painting, "Pepe");
console.log(sun.showMyArt());
```

## Miembros publicos y privados

[Index](#index)

TS define un modificador de acceso publico por defecto para los miembros de clase. Tambien es posible marcar un miembro como publico usando la palabra reservada public.

TS define una manera propia de declarar o marcar un miembro como privado usando la palabra reservada private. TS tambien soporta la sintaxis para miembros privados: #attribute, esta caracteristica puede ofrecer mejores grantias de aislamiento en miembros privados.

```ts
// Clases
enum TypesOfArt {
  Painting = "Painting",
  Sculpture = "Sculpture",
  Architecture = "Architecture",
  Music = "Music",
  Dance = "Dance",
  Coding = "Coding",
}

class Art {
  // Declaramos artName como privado
  private artName: string;
  // Declaramos artType como privado con la sintaxis #attribute
  #artType: TypesOfArt;
  artAuthor: string;

  constructor(artName: string, artType: TypesOfArt, artAuthor: string) {
    (this.artName = artName),
      (this.#artType = artType),
      (this.artAuthor = artAuthor);
  }

  showMyArt() {
    return `Hi, my name is ${this.artAuthor} and today I will show you a ${
      this.#artType
    } type art, its name is ${this.artName}`;
  }
}

const sun = new Art("Sun", TypesOfArt.Painting, "Pepe");

// La siguiente linea de codigo nos dara un error, ya que estamos tratando de acceder a una
// propiedad privada
// sun.artName = "Moon"; // private.

// La siguiente linea tambien daria un error, ya que lo definimos como privado
// sun.#artType = TypesOfArt.Sculpture; // private

sun.artAuthor = "Antonio"; // public

// En este caso estamos tratando de acceder a las propiedades de sun. Esta nos devolvera
// artAuthor ya que es publica y artName, porque la definimos como private. En cambio
// no nos sera devuelto #artType, porque fue definida con la sintaxis: #attribute
console.log(sun); // Art { artName: 'Sun', artAuthor: 'Antonio' }
```

## Metodos Set y Get

[Index](#index)

TS soporta los metodos accesores set y get como una forma de interceptar los accesos a los miembros privados de un objeto.

```ts
// Clases
enum TypesOfArt {
  Painting = "Painting",
  Sculpture = "Sculpture",
  Architecture = "Architecture",
  Music = "Music",
  Dance = "Dance",
  Coding = "Coding",
}

class Art {
  private artName: string;
  #artType: TypesOfArt;
  artAuthor: string;

  constructor(artName: string, artType: TypesOfArt, artAuthor: string) {
    (this.artName = artName),
      (this.#artType = artType),
      (this.artAuthor = artAuthor);
  }

  get getArtName() {
    return this.artName;
  }
  set setArtName(artName: string) {
    this.artName = artName;
  }

  get getArtType() {
    return this.#artType;
  }
  set setArtType(artType: TypesOfArt) {
    this.#artType = artType;
  }

  get getArtAuthor() {
    return this.artAuthor;
  }
  set setArtAuthor(artAuthor: string) {
    this.artAuthor = artAuthor;
  }

  showMyArt() {
    return `Hi, my name is ${this.artAuthor} and today I will show you a ${
      this.#artType
    } type art, its name is ${this.artName}`;
  }
}

const sun = new Art("Sun", TypesOfArt.Painting, "Pepe");

console.log(sun.getArtName);

sun.setArtName = "Moon";

console.log(sun.showMyArt());
```

## Herencia de clases y miembros protegidos

[Index](#index)

```ts
// Clases
enum TypesOfArt {
  Painting = "Painting",
  Sculpture = "Sculpture",
  Architecture = "Architecture",
  Music = "Music",
  Dance = "Dance",
  Coding = "Coding",
}

class Item {
  // Con protected definimos un atributo como privado, pero este puede ser usado
  // por las subclases
  protected id: string;
  protected artName: string;

  constructor(id: string, artName: string) {
    (this.id = id), (this.artName = artName);
  }

  get getId() {
    return this.id;
  }
  set setId(id: string) {
    this.id = id;
  }

  get getArtName() {
    return this.artName;
  }
  set setArtName(artName: string) {
    this.artName = artName;
  }
}

class Art extends Item {
  #artType: TypesOfArt;
  artAuthor: string;

  constructor(
    id: string,
    artName: string,
    artType: TypesOfArt,
    artAuthor: string
  ) {
    super(id, artName);
    this.#artType = artType;
    this.artAuthor = artAuthor;
  }

  get getArtType() {
    return this.#artType;
  }
  set setArtType(artType: TypesOfArt) {
    this.#artType = artType;
  }

  get getArtAuthor() {
    return this.artAuthor;
  }
  set setArtAuthor(artAuthor: string) {
    this.artAuthor = artAuthor;
  }

  showMyArt() {
    return `Hi, my name is ${this.artAuthor} and today I will show you a ${
      this.#artType
    } type art, its name is ${this.artName}`;
  }
}

const sun = new Art("dhajishdy12398", "Sun", TypesOfArt.Painting, "Pepe");

console.log(sun.getArtName);
```

## Clases abstractas

[Index](#index)

Son la base de donde otras clases podrian derivarse. A diferencia de una interfaz, una clase abstracta puede implementar funciones para sus instancias.

```ts
// Definimos la clase como abstracta
abstract class Item {
  protected id: string;
  protected artName: string;

  constructor(id: string, artName: string) {
    (this.id = id), (this.artName = artName);
  }

  get getId() {
    return this.id;
  }
  set setId(id: string) {
    this.id = id;
  }

  get getArtName() {
    return this.artName;
  }
  set setArtName(artName: string) {
    this.artName = artName;
  }
}

// La siguiente linea de codigo nos entregara un error ya que como la clase Item fue
// preivamente definida como abstract, no es posible instanciarla
const myItem = new Item("1290asd123", "Lemon");
```

## Propiedades estaticas y propiedades de solo lectura

[Index](#index)

A traves de la palabra reservada _**static**_ se puede definir un miembro visible a nivel de clase.

Podemos usar la palabra reservada **_readonly_** para marcar el miembro de una clase como solo lectura.

```ts
// Clases
enum TypesOfArt {
  Painting = "Painting",
  Sculpture = "Sculpture",
  Architecture = "Architecture",
  Music = "Music",
  Dance = "Dance",
  Coding = "Coding",
}

abstract class Item {
  protected readonly id: string;
  protected artName: string;

  constructor(id: string, artName: string) {
    (this.id = id), (this.artName = artName);
  }

  get getId() {
    return this.id;
  }
  // Tendriamos un error en esta linea, ya que previamente definimos el
  // id como una propiedad de solo lectura.
  // set setId(id: string) {
  //   this.id = id;
  // }

  get getArtName() {
    return this.artName;
  }
  set setArtName(artName: string) {
    this.artName = artName;
  }
}

class Art extends Item {
  // Definimos nuestro miembro estatico
  static typeOfArt = TypesOfArt;

  #artType: TypesOfArt;
  artAuthor: string;

  constructor(
    id: string,
    artName: string,
    artType: TypesOfArt,
    artAuthor: string
  ) {
    super(id, artName);
    this.#artType = artType;
    this.artAuthor = artAuthor;
  }

  get getArtType() {
    return this.#artType;
  }
  set setArtType(artType: TypesOfArt) {
    this.#artType = artType;
  }

  get getArtAuthor() {
    return this.artAuthor;
  }
  set setArtAuthor(artAuthor: string) {
    this.artAuthor = artAuthor;
  }

  showMyArt() {
    return `Hi, my name is ${this.artAuthor} and today I will show you a ${
      this.#artType
    } type art, its name is ${this.artName}`;
  }
}

// Probando el miembro estatico
console.log(Art.typeOfArt);
```

# Modulos

[Index](#index)

En TS los modulos proveen un mecanismo para una mejor organizacion del codigo y promueven su reutilizacion.

Con la palabra reservada **_export_** podemos exportar un bloque de codigo para que este pueda ser usado en otros archivos. Y con la palabra **_import_** podemos importar ese bloque de codigo que fue exportado, es decir podemos traer ese bloque de codigo que fue exportado y utilizarlo en nuestro archivo.

### Exportando

```ts
// A continuacion estare exportando tanto las dos clases que ya
// hemos creado y el enumerador, para de tal forma poder usarlos en
// otros archivos

export enum TypesOfArt {
  Painting = "Painting",
  Sculpture = "Sculpture",
  Architecture = "Architecture",
  Music = "Music",
  Dance = "Dance",
  Coding = "Coding",
}

export abstract class Item {
  protected readonly id: string;
  protected artName: string;

  constructor(id: string, artName: string) {
    (this.id = id), (this.artName = artName);
  }

  get getId() {
    return this.id;
  }

  get getArtName() {
    return this.artName;
  }
  set setArtName(artName: string) {
    this.artName = artName;
  }
}

export class Art extends Item {
  static typeOfArt = TypesOfArt;

  #artType: TypesOfArt;
  artAuthor: string;

  constructor(
    id: string,
    artName: string,
    artType: TypesOfArt,
    artAuthor: string
  ) {
    super(id, artName);
    this.#artType = artType;
    this.artAuthor = artAuthor;
  }

  get getArtType() {
    return this.#artType;
  }
  set setArtType(artType: TypesOfArt) {
    this.#artType = artType;
  }

  get getArtAuthor() {
    return this.artAuthor;
  }
  set setArtAuthor(artAuthor: string) {
    this.artAuthor = artAuthor;
  }

  showMyArt() {
    return `Hi, my name is ${this.artAuthor} and today I will show you a ${
      this.#artType
    } type art, its name is ${this.artName}`;
  }
}
```

### Importando

```ts
// Importando la clase y el enumerador hechos en el archivo myFirstProject
import { Art, TypesOfArt } from "./myFirstProject";

let adventure = new Art("21hj3h1", "adventure", TypesOfArt.Painting, "Anonimo");

// Probando la instancia de nuestra clase importada
console.log(adventure.showMyArt());
console.log(adventure);
adventure.setArtAuthor = "Lorenzo";
adventure.setArtName = "Bridge";
adventure.setArtType = TypesOfArt.Architecture;
console.log(adventure);
```

# Principio de responsabilidad unica

Idealmente, un archivo deberia tener un proposito o **responsabilidad unica**. Esto mejora la legibilidad del codigo, facilita la lectura, testing y mantenimiento.

Si entras a la carpeta donde se encuentran los codigos podras apreciar, que se creo un archivo para cada uno de las clases o enumeradores.

[art.ts](code\src\art.ts) para la clase _Art_, [item.ts](code\src\item.ts) para la clase _item_ y [enums.ts](code\src\enums.ts) para todos los enumeradoeres en este caso se encuentra _TypesOfArt_
