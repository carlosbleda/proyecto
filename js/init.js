const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function() {
    document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function() {
    document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url) {
    var result = {};
    showSpinner();
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function(response) {
            result.status = 'ok';
            result.data = response;
            hideSpinner();
            return result;
        })
        .catch(function(error) {
            result.status = 'error';
            result.data = error;
            hideSpinner();
            return result;
        });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance().disconnect();
    auth2.signOut().then(function() {
        console.log('User signed out.');

    });
}

function guardardatos(dato, pass) {
    var dato = document.getElementById('inputusuario')
    var pass = document.getElementById('inputPassword')

    if (dato.trim() === "" || dato.trim() === null) { //Chequea que el dato recibido no esté vacío. 
        //El método trim elimina los espacios en blanco al inicio y al final del mismo.
        console.log("El dato está vacío");
    }
    if (pass.trim() === "" || pass.trim() === null) {
        console.log("El password esta vacio")
    } else {
        localStorage.setItem("usuario", dato.trim()); //setItem almacena el dato en la posición "usuario"
        localStorage.setItem("password", pass.trim()); // Almaceno la contraseña
        sessionStorage.setItem("usuario", dato.trim());
        console.log(" Usuario : " + dato + " Password : " + pass);
        var datos = document.getElementById('dato');
        var usuario = localStorage.getItem("usuario"); //getItem Obtiene el dato de la posición "usuario"
        var sesion = sessionStorage.getItem("usuario");

    }
    datos.innerHTML = 'iniciaste sesion como:' + usuario + sesion;
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {

});