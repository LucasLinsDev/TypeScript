enum Permissoes{
  admin='ADMIN',
  editor='EDITOR',
  comum='COMUM',
}

//enum vai gerar um número
const usuario ={
    nivel:Permissoes.admin
}

console.log(usuario)