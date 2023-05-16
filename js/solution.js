"use strict";
const table = document.createElement('table');
table.setAttribute('main-table', '')
const rows = 10;
const cols = 10;
for(let i = 1; i <= rows; i++) {
    const row = document.createElement('tr');
    for(let j = 1; j <= cols; j++) {
        const col = document.createElement('td');
        let mult = i * j;
        let result = document.createTextNode(mult);
        col.appendChild(result);
        row.appendChild(col);
    }
    table.appendChild(row);
}
document.body.appendChild(table);



