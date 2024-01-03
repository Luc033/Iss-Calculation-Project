// INTERATIVIDADE COM A TABELA
function mudarEstado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none") {
        document.getElementById(el).style.display = 'block';
    }
}


/// CÁLCULO DA TAXA DE 
// E-X-P-E-D-I-E-N-T-E
var TxExpVigente = 60.78;

// FUNÇÃO QUE IRÁ  CALCULAR O VALOR DO ISS
var msgConsole = '';
var msgLblPrint = '';
let valorTxDemolicao = 74.70;
function calcularIssDemolicao() {
    // DECLARANDO VARIÁVEL PARA RECEBER O VALOR DO INPUT DE AREA, AO MESMO TEMPO QUE É CONVERTIDO PARA INT.
    var inpArea = parseFloat(document.getElementById('inpArea').value);
    let issParcialDemo = inpArea * valorTxDemolicao * 0.03;
    let issTotalDemo = TxExpVigente + issParcialDemo;

    //CHAMANDO TABLE
    mudarEstado('tbPrint');
    document.getElementById('tdAreaValor').innerHTML = inpArea.toFixed(2) + "m²";
    document.getElementById('tdQtdTxExpValor').innerHTML = '1';
    document.getElementById('tdTxExpValor').innerHTML = 'R$'+TxExpVigente;
    document.getElementById('tdIssDemoParcial').innerHTML = 'R$ '+issParcialDemo.toFixed(2);
    document.getElementById('tdIssDemoTotal').innerHTML ='R$ '+ issTotalDemo.toFixed(2);
    

}
