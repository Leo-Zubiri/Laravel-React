# Autenticación

Crear un controlador para la autenticación:

```php artisan make:controller AuthController```


```php
    public function register(Request $request){

    }

    public function login(Request $request){
        
    }

    public function logout(Request $request){
        
    }
```

## Request Personalizados

Request para validaciones avanzadas. Personalizar las validaciones de la información que ingresa el usuario.

```php artisan make:request NombreRequest```

De esta forma se puede utilizar de forma personalizada el request en los métodos del controlador:

```php
public function register(NombreRequest $request){
    $data = $request->validated();
}
```
La validacion del request personalizado depende del archivo Request creado el cual tiene los siguientes dos métodos:

```php
use Illuminate\Validation\Rules\Password;

...


    public function authorize()
    {   //Por defecto nos deje hacer el request
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required','string'],
            'email' => ['required','email','unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                Password::min(8)->letters()->symbols()->numbers()
            ],
        ];
    }
```

```php
//Autenticación
Route::post('/register',[AuthController::class,'register']);
```