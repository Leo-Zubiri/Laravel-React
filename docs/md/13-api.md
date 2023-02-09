# Respuesta JSON

Para comunicarse con react se debe utilizar una REST API, laravel tiene un archivo destinado a registrar las rutas de ese comportamiento.

El archivo `routes/web.php` está destinado a rutas de aplicación monolítica donde se cargan las vistas web.

Se debe utilizar `routes/api.php` en donde cada endpoint es accedido como `host/api/ruta`

Por ejemplo:

```php

Route::apiResource('/categorias',CategoriaController::class);

// api/categorias
```
> apiResource carga todos los métodos del controlador y asocia los respectivos métodos con los de HTTP

`Desde el controlador para retornar un JSON con categorias`:

```php
public function index() {
    return response()->json([
        'categorias' => Categoria::all()
    ]); 
}
```