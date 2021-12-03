function showCountry() {

    var path = window.location.href;
    var page = path.split("/").pop();
    var countryName = page.substring(13);
    console.log(countryName);

    fetch("https://restcountries.com/v3.1/name/"+countryName)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const image = document.getElementById("image");
        const info = document.getElementById("info");

        var borders = "";

        
        if(data[0].borders){
            for (let i = 1; i < data[0].borders.length; i++) {
            
                borders = borders + "<section id='border'>" +data[0].borders[Object.keys(data[0].borders)[i]] + "</section>";
            }
        } else {
            borders = "No borders";
        }

        image.innerHTML = "<img src='"+data[0].flags.png+"'>";

        info.innerHTML = 
        "<h1>"+data[0].name.common+"</h1>"+
        "<section id='left'>"+
            "<p><span>Native Name: </span>"+data[0].name.nativeName[Object.keys(data[0].name.nativeName)[0]].common+
            "<p><span>Population: </span>"+data[0].population+"</p>"+
            "<p><span>Region: </span>"+data[0].region+"</p>"+
            "<p><span>Sub Region: </span>"+data[0].subregion+"</p>"+
            "<p><span>Capital: </span>"+data[0].capital+"</p>"+
        "</section>"+
        "<section id='right'>"+
            "<p><span>Top Level Domain: </span>"+data[0].tld[0]+
            "<p><span>Currencies: </span>"+data[0].currencies[Object.keys(data[0].currencies)[0]].name+"</p>"+
            "<p><span>Languages: </span>"+data[0].languages[Object.keys(data[0].languages)[0]]+"</p>"+
        "</section>"+
        "<h4>Border Countries: </h4>"+
        "<footer>"+
            ""+borders+
        "</footer>";

    })
}


window.onload = function(){
    showCountry();
};

