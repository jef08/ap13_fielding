//botones//
const fellowship = document.querySelector(".fellowship");
const peliculas = document.querySelector(".peliculas");
const volver = document.querySelector(".volver");
const towers = document.querySelector(".towers");
const king = document.querySelector(".king");

//Info divs//
const fellowshipInfo = document.querySelector(".fellowship-info");
const towersInfo = document.querySelector(".towers-info");
const kingInfo = document.querySelector(".king-info");

//No display on load/"home"//
volver.style.display = "none";
fellowshipInfo.style.display = "none";
towersInfo.style.display = "none";
kingInfo.style.display = "none";

//Button event listeners//
volver.addEventListener("click", () => {
    peliculas.style.display = "flex";
    volver.style.display = "none";
    fellowshipInfo.style.display = "none";
    towersInfo.style.display = "none";
    kingInfo.style.display = "none";
})

fellowship.addEventListener("click", () => {
    peliculas.style.display = "none";
    fellowshipInfo.style.display = "flex";
    volver.style.display = "block";
})

towers.addEventListener("click", () => {
    peliculas.style.display = "none";
    towersInfo.style.display = "flex";
    volver.style.display = "block";
})

king.addEventListener("click", () => {
    peliculas.style.display = "none";
    kingInfo.style.display = "flex";
    volver.style.display = "block";
})
