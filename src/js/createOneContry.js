import {refs} from './refs';

export const createOneItem = (item) => { 
    const itemResult = `<li>
 <h2><span>Country: </span> ${item.name.official}</h2>
 <p><span>Capital: </span> ${item.capital}</p>
 <p><span>Popolation: </span> ${item.population}</p>
 <p><span>Flag: </span>
 <img src="${item.flags.svg}" alt="flag of ${item.name.official}" width="50"></p>
 <p><span>Languages: </span> ${Object.values(item.languages)}</p>
 </li>`;
 refs.litsCountresEl.insertAdjacentHTML('beforeend', itemResult);
 
 }

