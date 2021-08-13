function guardar(dato, pass) {

    if (dato.trim() === "" || pass.trim() === "") { //Chequea que el dato recibido no esté vacío. 
        //El método trim elimina los espacios en blanco al inicio y al final del mismo.
        alert("El dato está vacío");
    } else {
        localStorage.setItem("usuario", dato.trim()); //setItem almacena el dato en la posición "usuario"
        localStorage.setItem("password", pass.trim()); // Almaceno la contraseña
        sessionStorage.setItem("usuario", dato.trim());
        alert(" Usuario : " + dato + " Password : " + pass);




        //getItem obtiene el dato almacenado en la posición "usuario"

    }
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    location.href = "../index.html"
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {


});