
function pergunta_nome() {
    var nome_usuario;
    nome_usuario = prompt("qual o seu nome?");
    alert('ola ' + nome_usuario)
    pergunta_se_esta_bem();
}

var esta_bem;
function pergunta_se_esta_bem() {
    esta_bem = prompt("você esta bem?");

    if (esta_bem.toLocaleLowerCase() == 'sim') {
        alert('que bom')
    } else {
        (esta_bem.toLocaleLowerCase() == 'não')
        alert('que triste')
    }
}

var $secaoPalco = document.querySelector('.palco')
var resposta_ir_pra_lua
function quer_ir_pra_lua() {
    resposta_ir_pra_lua = prompt("você quer ir pra lua?");

    if (resposta_ir_pra_lua].toLocaleLowerCase() == 'sim') {
        alert('vamo nessa')
    } else {
        (esta_bem.toLocaleLowerCase() == 'não')
        alert('falou entao seu boboquinha')
    }
}



}