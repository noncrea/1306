/*
 * Gestión de eventos y formularios en JavaScript
 */

/*
    Función anónima
    1.- Ejecuta el código cuando la página se haya cargado completamente
    2.- al evento de click en el botón de id = 'enviar'
        ejecuta la función validarFormulario()
*/

window.onload = function() {

    // Se crea un objeto HTML Document

    var enviar = document.getElementById("enviar");

    /*
        addEventListener()
        Sintáxis:
        addEventListener( evento-a-escuchar, función-a-lanzar, booleano )
        Permanece a la escucha de un evento y cuando se activa ejecuta la función
    */

    // El método addEventListener asigna las funciones a los tipos de evento
    // Evento onclick, tipo click, sobre el objeto element HTML
    // con id 'enviar'
    // Llama a la función validarFormulario()
        // que se encarga de validar el formulario
    // Se programa en la fase de burbuja (false),
        // es decir, del elemento más específico hacia afuera

    enviar.addEventListener('click', validarFormulario, false);

}


// Crear una función "validarFormulario" que se ejecute al pulsar el botón enviar

/*
    Función validarFormulario()
    Realiza las validaciones de los campos de formulario
*/

function validarFormulario() {

    // Declaración de variables
    var valido = true;
    var expRegNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,50}$/;
    var expRegEmail = /^[a-zA-ZñÑ -_0-9]@{a-zA-Z0-9.-}{3,50}$/;

    // Objetos document HTML
    var formulario = document.getElementById("form")
    var nombre = document.getElementById("name");
    var email = document.getElementById("email");

    // Validar con JavaScript que el campo “nombre” no esté vacío

    if (nombre.value == "") {
        // Si está vacío se mostrará el mensaje “El campo ‘nombre’ es obligatorio”
        alert("El campo 'nombre' es obligatorio");
        // y se pondrá el foco en el campo “nombre”
        nombre.focus();
        valido = false;
    }

    // Validar con JavaScript que el campo “nombre” sólo acepte caracteres de letras y espacios en blanco.

    else if (!expRegNombre.exec(nombre.value)) {
        // Si no es válido mostrará el mensaje “El campo nombre sólo acepta letras y espacios en blanco”
        alert("El campo nombre sólo acepta letras y espacios en blanco ");
        // y se pondrá el foco en el campo “nombre”
        nombre.focus();
        valido = false;
    }



    if (email.value == "") {
        // Si está vacío se mostrará el mensaje “El campo ‘nombre’ es obligatorio”
        alert("El campo 'email' es obligatorio");
        // y se pondrá el foco en el campo “nombre”
        email.focus();
        valido = false;
    }
    else if (!expRegEmail.exec(email.value)) {
        // Si no es válido mostrará el mensaje “El campo nombre sólo acepta letras y espacios en blanco”
        alert("Pon un email correcto");
        // y se pondrá el foco en el campo “nombre”
        email.focus();
        valido = false;
    }

        // Si todos los campos son válidos
    // se mostrará el mensaje “Formulario enviado”.
    if (valido == true) {
        alert("Formulario enviado");
        formulario.submit();
        window.open (URL(`../pages/enviado.html`);
}

}