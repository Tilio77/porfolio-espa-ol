let menuVisible = false;
// Función que oculta/muestra el menu
function mostrarOcultarMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que seleccione una opción
    document.getElementById("nav").className = "";
    menuVisible = false;
}