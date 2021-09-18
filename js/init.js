const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
var guardardatos = sessionStorage.getItem('usuario');


var showSpinner = function() {
    document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function() {
    document.getElementById("spinner-wrapper").style.display = "none";
}


function mostrarusuario() {
    var usuario = document.getElementById('datos');
    usuario.innerHTML += 'Usuario:' + ' ' + guardardatos;
    usuario.style.color = 'white';

}

function login() { <<
    <<
    << < HEAD
    if (guardardatos === null) { ===
        ===
        =
        if (guardardatos == null) { >>>
            >>>
            > e5a81d32c899276569616d3a82fd5ff6dd2545aa
            location.href = 'login.html'
        } else {

        }
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


    <<
    <<
    << < HEAD
    /* function desconectar() {
        localStorage.clear();
        window.location = 'login.html'
    } */
        ===
        ===
        =
        function desconectar() {
            localStorage.clear();
            window.location = 'login.html'
        } >>>
        >>>
        > e5a81d32c899276569616d3a82fd5ff6dd2545aa


    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance().disconnect();
        auth2.signOut().then(function() {
            console.log('User signed out.');
            location.href = '/login.html'

        });
    }

    //Función que se ejecuta una vez que se haya lanzado el evento de
    //que el documento se encuentra cargado, es decir, se encuentran todos los
    //elementos HTML presentes.
    document.addEventListener("DOMContentLoaded", function(e) { <<
        <<
        << < HEAD
        mostrarusuario(); ===
        ===
        =

        >>>
        >>>
        > e5a81d32c899276569616d3a82fd5ff6dd2545aa
        // datoslogin();
    });