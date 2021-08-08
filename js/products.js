//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var categoriesArray = [];

function showCategoriesList(categoriesArray) {

    let htmlContentToAppend = "";
    for (let i = 0; i < categoriesArray.length; i++) {
        let category = categoriesArray[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                <img src="` + category.imgSrc + `" alt="` + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` + category.name + `</h4>
                       
                        <small class="text-muted">` + category.cost + ` artículos</small>
                    </div>
                    <p>` + category.description + `</p>
                </div>
            </div>
        </div>
        `

        document.getElementById("container").innerHTML = htmlContentToAppend;
    }

}
document.addEventListener("DOMContentLoaded", function(e) {
    showSpinner();
    getJSONData(PRODUCTS_URL).then(function(response) {
        if (response.status === "ok") {
            categoriesArray = response.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
            hideSpinner();
        }
    });

});