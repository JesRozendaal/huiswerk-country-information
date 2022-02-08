import axios from "axios";

console.log('Hallo daar!');

// 1. installeer de dependencies via npm install.
// 2. installeer Axios en import deze bovenin het app.js bestand. (vergeet type = "module" niet toe te voegen in het script in HTML!)
// 3. Benodigde endpoint: https://restcountries.com/v2/all
// 4. Schrijf een asynchrone functie om de gegevens uit de endpoint op te halen.
// 5. Log dit resultaat.
// 6. Probeer het 1e land te loggen om te zien welk pad ik moet volgen.
// 7. Maak een ul-tag in de index. (container)
// 8. Haal deze binnen in je js file.
// 9. Maak een nieuw element waar je alle data in op wil slaan. (testen met 1 land)
// 10. Zet de data die je nodig hebt in dit element.
// 11. Append dit element aan je container.
// 12. Map door de array van het resultaat.
// 13. Voeg dit toe aan je nieuw gemaakte element.

async function fetchCountries () {

    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result);
        console.log(result.data[0].name);

       // result.data.sort((a, b) => {
        //    return a.population - b. population;
        //})

        getAllCountries(result.data);

    } catch (error) {
        console.log(error);
    }
}

fetchCountries();

function getAllCountries(countries) {

    const countryUnorderedList = document.getElementById('list-of-countries');

    countries.map((allCountries) => {
        const countryList = document.createElement('li');
        countryList.innerHTML=
            `<img src="${allCountries.flag}" class="flag" width="50px"/>
                 <h3>${allCountries.name}</h3>
                 <p>${allCountries.population}</p>`

        countryUnorderedList.appendChild(countryList);

    })
}