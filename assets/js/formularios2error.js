window.onload = function() {
    var enviar = document.getElementById("enviar");
    enviar.addEventListener('click', validarFormulario, false);
}
console.log('a ');

function validarFormulario( enviar ) {
    var formulario = document.getElementById("form")
    var name = document.getElementById("name");
    var edad = document.getElementById("edad");
    var email = document.getElementById("email");
    var mensaje = document.getElementById("mensaje");
    var telefono  = document.getElementById("tfno");

    var validacion = false;

    if (
        validarSoloTexto( name )
        && validarNumero( edad, 0, 120 )
        && validarEmail( email )
        //&& validarTextarea( mensaje, 3, 255 )
        //&& validarTfno (telefono)
        && confirm("¿Deseas enviar el formulario con estos datos?")
    ){
        validacion = mensajeError(0);
    }
    else {
        enviar.preventDefault();
    }  
    console.log('2 ');

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
            etiquetaInfo.innerHTML = texto;
        break;
        case 2:
            texto += "Sólo acepta letras del alfabeto español y espacios en blanco";
            etiquetaInfo.innerHTML = texto;
        break;
        case 3:
            texto += "un email válido";
            etiquetaInfo.innerHTML = texto;
        break;
        case 4:
            texto += "edad entre 19 y 110 años";
            etiquetaInfo.innerHTML = texto;
        break;
        case 5:
            texto += "su mensaje a de ser de 3 a 250 caracteres";
            etiquetaInfo.innerHTML = texto;
        break;
        case 6:
            texto += "teléfono erróneo";
            etiquetaInfo.innerHTML = texto;
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
    return false;
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

function validarEmail ( elemento ) {
    var expresionRegular = /^[a-zA-Z0-9._%+-ñÑ]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
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
function validarTextarea ( elemento ) {
    var expresionRegular = elemento.length > 255;
    var validacion = validarObligatorio( elemento );
    switch ( validacion ) {
        case true:
            var resultadoExpRegular = expresionRegular.exec( elemento.value );
            if ( !resultadoExpRegular ) {
                validacion = mensajeError( 5, elemento );
            }
        break;
    }
   return validacion;
}

function validarNumero ( elemento ) {
    var expresionRegular = elemento.value < 18 || elemento.value > 120;
    var validacion = validarObligatorio( elemento );
    switch ( validacion ) {
        case true:
            var resultadoExpRegular = expresionRegular.exec( elemento.value );
            if ( !resultadoExpRegular ) {
                validacion = mensajeError( 4, elemento );
            }
        break;
    }
   return validacion;
}

function validarTfno ( elemento ) {
    var expresionRegular = /^[6-9]{1}[0-9]{8}$/;;
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

function validao() {
    window.open ("../temas/enviado.html");
}
    

