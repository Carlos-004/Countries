import  "./sass/style.scss"

const countries = [];


function paises(){
    const url = "https://restcountries.com/v3.1/independent?status=true";
    fetch(url).then(respuesta =>{
        return respuesta.json()
    }).then(data =>{
        countries.push(...data)
        console.log(data);
    })
}

const cambiarColor = document.querySelector(".icon");
cambiarColor.addEventListener("click", () =>{
    const body = document.querySelector("body");

    if (!body.classList.contains("negro")) {
        body.classList.add("negro")
    }else if (body.classList.contains("negro")) {
        body.classList.remove("negro")
    }

})


const buscarCountry = document.querySelector("#buscar-country");
buscarCountry.addEventListener("keydown",buscarBanderas);

const countryContainer = document.querySelector(".country__grid")

function buscarBanderas(){
    const banderas = buscarCountry.value.toLowerCase();
    countryContainer.innerHTML = "";

    countries.forEach(element =>{
        const nombreDeLasBanderas = element.name.common.toLowerCase();

        if (nombreDeLasBanderas.includes(banderas)) {
            const divCountrie = document.createElement("div");
            divCountrie.classList.add("country__container");

            const figureContainer = document.createElement("figure");
            figureContainer.classList.add("banderas");

            const banderaImg = document.createElement("img");
            banderaImg.setAttribute("src",`${element.flags.png}`);
            banderaImg.classList.add("bandera__img");
            banderaImg.setAttribute("alt",`${element.name.common}`);
            figureContainer.append(banderaImg)
            divCountrie.append(figureContainer);

            const divCountrieInfo = document.createElement("div");
            divCountrieInfo.classList.add("country_info");
            divCountrieInfo.style.backgroundColor ="#fff"
            divCountrie.append(divCountrieInfo);

            const titlePais = document.createElement("h2");
            titlePais.innerText = `${element.name.common}`;
            titlePais.classList.add("country__title")
            divCountrieInfo.append(titlePais);

            const countriesUl  = document.createElement("ul");
            countriesUl.classList.add("country__list");
            divCountrieInfo.append(countriesUl);

            const population = document.createElement("li");
            population.classList.add("population","list");
            population.innerText = "Population: ";

            const populationSpan = document.createElement("span")
            populationSpan.classList.add("population__span","span_list");
            populationSpan.innerText =`${element.population}`
            population.append(populationSpan);
            countriesUl.append(population)

            const region = document.createElement("li");
            region.classList.add("region","list");
            region.innerText = "Region: ";

            const regionSpan = document.createElement("span")
            regionSpan.classList.add("region__span","span_list");
            regionSpan.innerText =`${element.region}`;
            region.append(regionSpan);
            countriesUl.append(region);

            const capital = document.createElement("li");
            capital.classList.add("region","list");
            capital.innerText = "Capital: ";

            const capitalSpan = document.createElement("span");
            capitalSpan.classList.add("region__span","span_list");
            capitalSpan.innerText =`${element.capital}`;
            capital.append(capitalSpan);
            countriesUl.append(capital);

            countryContainer.append(divCountrie)
        }
    })

}


buscarBanderas();


paises();