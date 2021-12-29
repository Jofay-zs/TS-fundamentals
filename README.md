# Curso de Fundamentos de TypeScript

![wallpaper of TypeScript](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F2000%2F1*i0qclSPNcjj8cWOPr3wLxg.png&f=1&nofb=1)

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
