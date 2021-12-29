[Regresar](../README.md)

# undefined

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
