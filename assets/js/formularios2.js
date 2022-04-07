
window.onload = function() {


    var enviar = document.getElementById("enviar");

    enviar.addEventListener('click', validarFormulario, false);

}

function validarFormulario( enviar ) {

    var formulario = document.getElementById("form")
    var nombre = document.getElementById("name");
    var edad = document.getElementById("edad");
    var email = document.getElementById("email");
    var mensaje = document.getElementById("mensaje");
    var telefono = document.getElementById("tfno");

    var validacion = false;

    if (
        validarSoloTexto( nombre )
        && validarEmail( email )
        && validarTfno( telefono )
        && validarEdad( edad, 18, 120 )  
        && validarTextarea( mensaje, 3, 255 )
        && confirm("¿Deseas enviar el formulario con estos datos?")
    ){
        validacion = mensajeError(0);

    }

    else {
        enviar.preventDefault();

    }

    console.log('Validación: ' + validacion + '\n');
    console.log('----------------------------------');
    return validacion;
}

function mensajeError ( error, elemento="", min=0, max=300, id="errores" ) {
    var campo = elemento.name.toUpperCase();
    var validacion = false;
    var texto = "[ERROR " + error + "] ";
    texto += "en el campo '" + campo + "': ";

    var etiquetaInfo = document.getElementById( id );
    etiquetaInfo.className = "danger";

    if ( error != 0 ) {
        elemento.focus();
    }

    switch ( error ) {
        case 0:
            texto = "Formulario válido!";
            etiquetaInfo.className = "success";
            etiquetaInfo.innerHTML = texto;  
            
            validacion = true;

        break;

        case 1:
            texto += "No puede estar vacío!";
            etiquetaInfo.innerHTML = alert(texto);
        break;

        case 2:
            texto += "Sólo acepta letras del alfabeto español y espacios en blanco";
            etiquetaInfo.innerHTML = alert(texto);
        break;

        case 3:
            texto += "El correo electrónico no parece un email válido";
            etiquetaInfo.innerHTML = alert(texto);
        break;

        case 4:
            texto += "edad entre 18 y 120 años";
            etiquetaInfo.innerHTML = alert(texto);
        break;

        case 5:
            texto += "su mensaje a de ser de 3 a 250 caracteres";
            etiquetaInfo.innerHTML = alert(texto);
        break;

        case 6:
            texto += "teléfono erróneo, solo números sin espacios";
            etiquetaInfo.innerHTML = alert(texto);
        break;
    }
    return validacion;
}

function validarObligatorio( elemento ) {
    var validacion = true;

    if (
        ( elemento.attributes["required"] == "true"
            || elemento.required == true )
        && !( elemento.value.trim().length > 0 )
    ){
        validacion = mensajeError( 1, elemento );
    }
    return validacion;
}

function validarSoloTexto( elemento ) {
    var expresionRegular = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ\s]+$/;
    var validacion = validarObligatorio( elemento );

    switch ( validacion ) {
        case true:
            var resultadoExpRegular = expresionRegular.exec( elemento.value );

            if ( !resultadoExpRegular ) {
                validacion = mensajeError( 2, elemento );
            }
        break;
    }
    return validacion;
}

function validarEmail( elemento ) {
    var expresionRegular = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var validacion = validarObligatorio( elemento );

    switch ( validacion ) {

        case true:
            var resultadoExpRegular = expresionRegular.exec( elemento.value );
            if ( !resultadoExpRegular ) {
                validacion = mensajeError( 3, elemento );
            }
        break;
    }
    return validacion;
}

function validarTfno ( elemento ) {
    var expresionRegular = /^[6-9]{1}[0-9]{8}$/;
    var validacion = validarObligatorio( elemento );
    switch ( validacion ) {
        case true:
            var resultadoExpRegular = expresionRegular.exec( elemento.value );
            if ( !resultadoExpRegular ) {
                validacion = mensajeError( 6, elemento );
            }
        break;
    }
   return validacion;
}

function validarEdad ( elemento, min, max ) {
    var validacion = true;
    var min=18;
    var max=120;
    switch ( validacion ) {
        case true:
            if (elemento.value <= min || elemento.value >= max) {
                validacion = mensajeError( 4, elemento, min, max );
            }
        break;
        }
   return validacion;
}

function validarTextarea ( elemento, min, max ) {
    var min=3;
    var max=250;
    var validacion = validarObligatorio( elemento );
    elemento = mensaje.valeu
    switch ( validacion ) {
        case true:
            if (elemento.length <= min || elemento.length >= max) {
                validacion = mensajeError( 5, elemento, min, max );
            }
        break;
        }
   return validacion;
}

function validao() {
    window.open ("../temas/enviado.html");
}
