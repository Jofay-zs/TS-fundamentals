[Regresar](../README.md)

# any

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