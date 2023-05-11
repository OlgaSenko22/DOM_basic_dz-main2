"use strict";
const ul = document.querySelector('ul');
const arrAttribute = [];
const arrValue = [];
for(const value of ul.attributes) {
    arrValue.push(value.value);
}
console.log(arrValue);
for(const list of ul.attributes) {
    arrAttribute.push(list);
}
console.log(arrAttribute);
const liLast = document.querySelectorAll('li');
const lastLength = liLast[liLast.length - 1];
lastLength.textContent = 'My name is Olga';
console.log(lastLength);
const firstElement = document.querySelector('li');
firstElement.setAttribute('data-my-name', 'Olga');
console.log(firstElement);
ul.removeAttribute('data-dog-tail');
console.log(ul);

