// recuperamos el boton que envia el form

function redirigirPagina1() {
    window.location.href = "T1.2.html";
}

function redirigirPagina2() {
    window.location.href = "T1.3.html";
}

function redirigirPagina3() {
    window.location.href = "T1.4.html";
}

function redirigirPagina0() {
    window.location.href = "T1.1.html";
}

//////////////////////////////////////////////////

function redirigirPagina5() {
    window.location.href = "T1.3.1.html";
}
function redirigirPagina6() {
    window.location.href = "T1.3.2.html";
}
function redirigirPagina7() {
    window.location.href = "T1.3.3.html";
}
function redirigirPagina8() {
    window.location.href = "T1.3.4.html";
}
function redirigirPagina9() {
    window.location.href = "T1.3.5.html";
}

/////////////////////////////////////////////////

document.getElementById("agregar_actividad").addEventListener("click", redirigirPagina1);
document.getElementById("listado_actividades").addEventListener("click", redirigirPagina2);
document.getElementById("stats").addEventListener("click", redirigirPagina3);
document.getElementById("volver_inicio").addEventListener("click", redirigirPagina0);

///////// Redirecciones de detalle de actividades /////////////////

document.getElementById("ver_mas1").addEventListener("click", redirigirPagina5);
document.getElementById("volver1").addEventListener("click", redirigirPagina0);

document.getElementById("ver_mas2").addEventListener("click", redirigirPagina6);
document.getElementById("volver2").addEventListener("click", redirigirPagina0);

document.getElementById("ver_mas3").addEventListener("click", redirigirPagina7);
document.getElementById("volver3").addEventListener("click", redirigirPagina0);

document.getElementById("ver_mas4").addEventListener("click", redirigirPagina8);
document.getElementById("volver4").addEventListener("click", redirigirPagina0);

document.getElementById("ver_mas5").addEventListener("click", redirigirPagina9);
document.getElementById("volver5").addEventListener("click", redirigirPagina0);
