var products = {};
var comenatarios = [];

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let imagen of array) {
        let imageSrc = imagen;

        htmlContentToAppend += `
        <div class="col-sm p-sm-3">
        <img class="img-fluid img-thumbnail d-inline" src="` + imageSrc + `" alt="" class="img-thumbnail">
        </div>
        `
        document.getElementById("Images").innerHTML = htmlContentToAppend;

    }

}

function productosrelacionados(array) {
    let texto = "";
    for (let i = 0; i < array.length; i++) {
        var productrelated = array[i]
        texto += `
       <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"></h5>
  <p class="card-text">` + "Comentario:" + " " + productrelated.relatedProducts + `</p>
        </div>
      </div>
    `


    }
    document.getElementById('productosrelacionados').innerHTML += texto;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            products = resultObj.data;
            mostrarcomentarios(comenatarios);
            productosrelacionados(products)
            let categoryNameHTML = document.getElementById("productName");
            let categoryDescriptionHTML = document.getElementById("productDescription");
            let productsoldHTML = document.getElementById("productsold");
            let productprecio = document.getElementById("precio");
            let productcategoria = document.getElementById("categoria");

            categoryNameHTML.innerHTML = products.name;
            categoryDescriptionHTML.innerHTML = products.description;
            productsoldHTML.innerHTML = products.soldCount;
            productprecio.innerHTML = products.cost + products.currency;
            productcategoria.innerHTML = products.category;


            //Muestro las imagenes en forma de galería
            showImagesGallery(products.images);
        }
    });
});