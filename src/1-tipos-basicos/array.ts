const gatos:string[]=[
  'lora',
  'logan',
  
]

gatos.push('lucas');

console.log(gatos);

function exibeGatos(gatos:string[]){
  
  return `Os gatos são :${gatos.join(',')}`;

}
console.log(exibeGatos(gatos));