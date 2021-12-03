const search = document.getElementById("searchcountry");

const filter = document.getElementById("filter");

search.addEventListener("input", SearchCountry);

filter.addEventListener("input", SearchCountry);

function showAllCountries(){
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const grid = document.getElementById("grid");

        grid.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            if(data[i].region == filter.value || filter.value == "Filter by Region") {
                grid.innerHTML =
                grid.innerHTML + 
                "<section id='country'>"+
                "<a href='country.html#"+data[i].name+"'>"+
                "<section id='holder'>"+
                "<img src='"+ data[i].flags.png+"'>"+
                "<h1>"+data[i].name+"</h1>"+
                "<p><span>Population: </span>"+data[i].population+"</p>"+
                "<p><span>Region: </span>"+data[i].region+"</p>"+
                "<p><span>Capital: </span>"+data[i].capital+"</p>"+
                "<section id='holder'>"+
                "</a>"+
                "</section>";
            }
        }
    })
}

function SearchCountry() {
    fetch("https://restcountries.com/v3.1/name/" + search.value)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const grid = document.getElementById("grid");

        grid.innerHTML = "";

        if(search.value){
            for (let i = 0; i < data.length; i++) {
                if(data[i].region == filter.value || filter.value == "Filter by Region") {
                    grid.innerHTML =
                    grid.innerHTML + 
                    "<section id='country'>"+
                    "<a href='country.html#"+data[i].name.common+"'>"+
                    "<section id='holder'>"+
                    "<img src='"+ data[i].flags.png+"'>"+
                    "<h1>"+data[i].name.common+"</h1>"+
                    "<p><span>Population: </span>"+data[i].population+"</p>"+
                    "<p><span>Region: </span>"+data[i].region+"</p>"+
                    "<p><span>Capital: </span>"+data[i].capital+"</p>"+
                    "<section id='holder'>"+
                    "</a>"+
                    "</section>";
                }
            }
        } else {
            showAllCountries();
        }
    })
}

window.onload = function(){
    showAllCountries();
};

