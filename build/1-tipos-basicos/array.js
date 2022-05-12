"use strict";
const gatos = [
    'lora',
    'logan',
];
gatos.push('lucas');
console.log(gatos);
function exibeGatos(gatos) {
    return `Os gatos são :${gatos.join(',')}`;
}
