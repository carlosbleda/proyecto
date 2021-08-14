function guardardatos(dato, pass) {

    if (dato.trim() === "" || pass.trim() === "") { //Chequea que el dato recibido no esté vacío. 
        //El método trim elimina los espacios en blanco al inicio y al final del mismo.
        console.log("El dato está vacío");
    } else {
        localStorage.setItem("usuario", dato.trim()); //setItem almacena el dato en la posición "usuario"
        localStorage.setItem("password", pass.trim()); // Almaceno la contraseña
        sessionStorage.setItem("usuario", dato.trim());
        console.log(" Usuario : " + dato + " Password : " + pass);




        //getItem obtiene el dato almacenado en la posición "usuario"

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