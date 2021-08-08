//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    guardar();
});
let dato = "";
let pass = "";

function guardar(dato, pass) {

    if (dato.trim(dato) === "" || pass.trim(pass) === "") { //Chequea que el dato recibido no esté vacío. 
        //El método trim elimina los espacios en blanco al inicio y al final del mismo.

    } else {
        localStorage.setItem("usuario", dato.trim()); //setItem almacena el dato en la posición "usuario"
        localStorage.setItem("password", pass.trim()); // Almaceno la contraseña
        sessionStorage.setItem("usuario", dato.trim());
        console.log(" Usuario : " + dato + " Password : " + pass);


        location.href = "categories.html";

        //getItem obtiene el dato almacenado en la posición "usuario"

    }
}