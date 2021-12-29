[Regresar](../README.md)

# never

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
