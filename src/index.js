import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputCountryEl = document.querySelector('#search-box');
const litsCountresEl = document.querySelector('.country-list');

console.log(inputCountryEl);
console.log(litsCountresEl);

const URL = 'https://restcountries.com/v2/all?fields=name,capital,population,flag,languages';


const createListItem = (item) => `<li>
<h2>${item.name}</h2>
<p>${item.capital}</p>
<p>${item.population}</p>
<img src="${item.flag}" alt="flag of ${item.name}" width="50">
<p>${item.languages[0].nativeName}</p>
</li>`

const generateContent =(array) =>
    array.reduce((acc, item) => acc + createListItem(item), "");

const insertContent = (array) => {
    const result = generateContent(array);
    litsCountresEl.insertAdjacentHTML('beforeend', result);
}

fetch(URL)
.then((response) => response.json())
.then((data) => {console.log(data);
insertContent(data)})
.catch((error) => {console.log(error)})