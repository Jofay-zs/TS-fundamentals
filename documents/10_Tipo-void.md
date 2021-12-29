[Regresar](../README.md)

# void

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