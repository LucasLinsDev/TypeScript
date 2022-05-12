let estaAtivo:boolean;

estaAtivo=true;

function mapearStatusDeUsuario(status:boolean){
  if (status){
    return 'usuário está ativo';

  }else{
    return 'usuario não está ativo'
  }
}