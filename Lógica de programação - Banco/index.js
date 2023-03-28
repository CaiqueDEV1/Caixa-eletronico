{
    var nome = prompt("Digite seu nome")
    alert("Olá " + nome + ", é um prazer tê-lo conôsco!");
}
var numeroConta = "123456";
var saldo = 1000;
var valorsaque

function senha () {
    let senha = Number(prompt("Digite sua senha: "));
    if(senha == 3589){
        return true;
    }	else {
        alert("Senha inválida");
        return false;
    }
}

//Float
function inicio() 
    {
    var escolha = parseInt(prompt('Selecione uma opção \n1.) Saldo  \n2.) Extrato \n3.) Saque  \n4.) Depósito  \n5.)Transferência  \n6.) Sair'));

    switch (escolha) {
        case 1:
            ver_saldo();
            break;
         case 2: 
        mostrar_extrato();
        break;
         case 3: 
        fazer_saque();
        break;
        case 4:
        fazer_deposito();
        break;
        case 5:
        fazer_transferencia();
        break;	
        case 6:
        sair();
        break;
        default:
        erro();
        break;
    }
}

function ver_saldo() {
    parseInt(alert('Seu saldo atual é: ' + saldo));
    inicio();
}

function mostrar_extrato() {
    if (senha(true)) {
    var extrato = parseFloat(alert(nome + ' aqui está seu extrato:\nShoppingItaquera MAZE R$840,00.\nShoppingItaquera MCDonalds R$119,49.\nBotecodoJão R$15,00.'));
    inicio();
}
    else {
        alert("Senha inválida")
        inicio();
    }
}

function fazer_saque() {
if (senha(true)); {
    var valorsaque = prompt('Qual o valor para saque?');
    
    if (valorsaque > saldo) {
    alert('Operação não autorizada:');
    
    } else if(valorsaque < saldo) {
        saldo -= valorsaque;		
        ver_saldo();
    }
    else {
        alert("Senha inválida")
        inicio();
    }
}

} 

function fazer_deposito() {
    if (senha(true));
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));

    if (isNaN(deposito)) {
        alert('Por favor, informe um número:');
        fazer_deposito();
    } else if (saldo) {
        
        saldo += deposito;
        ver_saldo();
        inicio()
    }
    else {
        alert("Senha inválida")
        inicio();
    }
}

var destino = "654321";

function fazer_transferencia() {
if (senha(true));
    var quantia = prompt('Por favor, informe a quantia que será transferida');

      if (quantia > saldo) {
        alert("Saldo indisponivel");
      } else if (transferencia) {
        saldo -= quantia;
        alert("Transferência de " + quantia + " para a conta " + destino + " realizada com sucesso.");
        ver_saldo();
        inicio();
      }
    else {
    alert("Senha inválida")
    inicio();
}
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    var confirmae = confirm(nome + ' foi um prazer tê-lo conôsco!')
    if (confirmae) {
        window.close();
    } else {
        inicio();
    }
    
}
inicio ()