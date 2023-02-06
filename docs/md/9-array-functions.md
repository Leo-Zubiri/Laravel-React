# Array functions

Algunas funciones importantes para utilizar con los arreglos en react.

## map

```jsx
{
    pedido.length === 0 ? (
    <p className="text-center text-2xl"> 
        No hay elementos en tu pedido aún
    </p>
    ) : (
    pedido.map(prod=>(
        <ResumenProducto 
        key={prod.id}
        producto={prod}
        />
    ))
    )
}
```

## filter

```jsx
const productoEdit = pedido.filter(pedidoState => pedidoState.id === producto.id)[0];

//retorna un arreglo de objetos

```

## some

```jsx
if(pedido.some(pedidoState => pedidoState.id === producto.id)){
    // Si Está en el pedido
    const pedidoActualizado = pedido.map(pedidoState => 
        pedidoState.id === producto.id ? producto : pedidoState)
    setPedido(pedidoActualizado);
} else {
    setPedido([...pedido,producto]);
}
```