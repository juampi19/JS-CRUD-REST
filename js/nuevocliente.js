import { nuevoCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";
//iffe para poder proteger las funciones de este archivo
(function(){
    const formulario = document.querySelector( '#formulario' );

    window.onload = () => {
        formulario.addEventListener( 'submit', validarCliente );

    }

    //Funcion para poder validar los campos del cliente
    const validarCliente = ( e ) => {
        e.preventDefault();

        //validando campos
        const nombre = document.querySelector( '#nombre' ).value;
        const email = document.querySelector( '#email' ).value;
        const telefono = document.querySelector( '#telefono' ).value;
        const empresa = document.querySelector( '#empresa' ).value;

        //Otra forma de validar los campos
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        //Validamos con every
        if( validar( cliente ) ) {
           mostrarAlerta( 'Todos los campos son Obligatorios' );
            return;
        }

        //Enviando peticion post
        nuevoCliente( cliente );
    }



})();