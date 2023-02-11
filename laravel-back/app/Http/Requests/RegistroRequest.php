<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegistroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
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

    public function messages(){
        return [
            'name.required' => 'El nombre es obligatorio',
            'email.required' => 'El email es obligatorio',
            'email.email' => 'El correo no tiene un formato válido',
            'email.unique' => 'Existe una cuenta con este correo',
            'password.required' => 'Campo Password es requerido'
        ];
    }
}
