"use strict";
let estaAtivo;
estaAtivo = true;
function mapearStatusDeUsuario(status) {
    if (status) {
        return 'usuário está ativo';
    }
    else {
        return 'usuario não está ativo';
    }
}
