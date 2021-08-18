var usuario = document.getElementById('nombre');
var contraseña = document.getElementById('pass');
var span1 = document.getElementById('errorusuario');
var span2 = document.getElementById('errorcontraseña');

function validar() {


    if (usuario.value.trim() == "" || contraseña.value.trim() == "") {
        usuario.focus();
        contraseña.focus();
        span1.style.display = 'block'
        span1.style.color = 'red'
        span2.style.display = 'block'
        span2.style.color = 'red'
        span1.innerHTML += 'debe ingresar un usuario';
        span2.innerHTML += 'debe ingresar una contraseña';
        return location.href = 'index.html'

    } else {
        span1.style.display = 'none'
        span1.style.color = 'black'
        span2.style.display = 'none'
        span2.style.color = 'black'

    }

    //document.getElementById("boton_validar").onclick = validar;

}

//función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {


});