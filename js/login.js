//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    //  guardar();
    const div = document.createElement('div');
    div.setAttribute('id', 'contenedor');
    document.body.appendChild
    mostrarlogin();
});
let usuario = [];
let pass = "";
let array = [];
//function guardar(dato, pass) {

//if (dato.trim(dato) === "" || pass.trim(pass) === "") { //Chequea que el dato recibido no esté vacío. 
//El método trim elimina los espacios en blanco al //inicio y al final del mismo.

// } else {
//localStorage.setItem("usuario", dato.trim()); //setItem almacena el dato en la posición "usuario"
// localStorage.setItem("password", pass.trim()); // Almaceno la contraseña
// sessionStorage.setItem("usuario", dato.trim());
// console.log(" Usuario : " + dato + " Password : " + pass);


//location.href = "categories.html";

//getItem obtiene el dato almacenado en la posición "usuario"

//} //
//}
//
function mostrarlogin(array) {

    const contenidohtml = "";
    for (let i = 0; array.length; i++) {
        let categoria = array[i];
        contenidohtml += `'<form class=
    'signin' > < /form>'
    '<h2>'
    'Ingrese para continuar' < /h2>'` +

            `<
    input type = text id = "dato"
    placeholder = " Nombre de usuario"
    required > < br > < br >` +

            `<
        input type = "password"
    id = "pass"
    placeholder = " Tu clave aquí "
    required > < br > < br >` +



            `<
        button onclick = "guardar(dato.value, pass.value);" > Iniciar Sesion < /button>
<br > < a href = "categories.html" > Ir a la siguiente < /a> < /
        form >
        '`
        document.getElementById("contenedor").innerHTML = contenidohtml;
    }
}