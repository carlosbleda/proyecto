function validar() {

    var usuario = document.getElementById('nombre');
    var contraseña = document.getElementById('pass');
    var span1 = document.getElementById('errorusuario');
    var span2 = document.getElementById('errorcontraseña');

    if (usuario.value === '' || contraseña.value === '') {
        span1.style.display = 'block';
        span2.style.display = 'block';
        span1.innerHTML = 'debe ingresar usuario';
        span2.innerHTML = 'debe ingresar contraseña';
        usuario.classList.add('error');
        contraseña.classList.add('error');
        usuario.style.border = '2px solid red';
        contraseña.style.border = '2px solid red';
    } else {
        span1.style.display = 'none';
        span2.style.display = 'none';
        usuario.classList.remove("error");
        contraseña.classList.remove('error');
        span1.innerHTML = ' ';
        span2.innerHTML = ' ';
        location.href = 'index.html'

    }


}



function onSignIn(googleUser) { //funcion de inicio de sesion del boton de google
    var profile = googleUser.getBasicProfile();
    sessionStorage.setItem('ID: ' + profile.getId())
    sessionStorage.setItem('Name: ' + profile.getName());
    sessionStorage.setItem('Image URL: ' + profile.getImageUrl());
    sessionStorage.setItem('Email: ' + profile.getEmail());
    location.href = "/proyecto/index.html" //redireccion a la pagina principal
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {


});