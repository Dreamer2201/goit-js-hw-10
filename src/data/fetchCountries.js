import {filterNecessaryCountries} from '../index'

function fetchCountries (name) {
    const URL = 'https://restcountries.com/v2/all?fields=name,capital,population,flag,languages';
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            const necessaryCountries = data.filter(contry => contry.name.toUpperCase().includes(name));
            filterNecessaryCountries (necessaryCountries);     
        })
        .catch((error) => { console.log(error) })
}
export {fetchCountries};