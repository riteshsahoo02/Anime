const button = document.getElementById("btn-data");
button.addEventListener("click", logMovies);

async function logMovies(){
    const response = await fetch("data.json");
    const movies = await response.json();
    console.log(movies);
}