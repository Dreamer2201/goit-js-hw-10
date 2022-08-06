
import {refs} from './refs';

const createListItems = (item) => `<li class="list-item">
<img src="${item.flags.svg}" alt="flag of ${item.name.official}" width="50">
<h2>${item.name.official}</h2></li>`

const generateContent = (array) =>
    array.reduce((acc, item) => acc + createListItems(item), "");

const insertContent = (array) => {
    const result = generateContent(array);
    refs.litsCountresEl.insertAdjacentHTML('beforeend', result);
}

export {createListItems, generateContent, insertContent};