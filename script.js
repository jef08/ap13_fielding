const fellowship = document.querySelector(".fellowship");
const peliculas = document.querySelector(".peliculas");
const volver = document.querySelector(".volver");
const fellowshipInfo = document.querySelector(".fellowship-info")

volver.style.display = "none";
fellowshipInfo.style.display = "none";

volver.addEventListener("click", () => {
    peliculas.style.display = "flex";
    volver.style.display = "none";
    fellowshipInfo.style.display = "none";
})

fellowship.addEventListener("click", () => {
    peliculas.style.display = "none";
    document.querySelector(".fellowship-info").style.display = "flex";
    document.querySelector(".volver").style.display = "block";
})