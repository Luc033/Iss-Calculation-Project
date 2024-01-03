// INTERATIVIDADE COM A TABELA
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none") {
        document.getElementById(el).style.display = 'block';
    }
}


// DECLARANDO FUNÇÃO E VARIAVEIS PARA AUXILIAR O CÁLCULO DE 
// L-A-D-O
var valorLadoIss = 0;
var lado = '';
var ladoA = 747.01;
var ladoB = 602.37;
function valorLado() {
    var radios = document.getElementsByName("ladoRadio");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value === 'A') {
                radios[i].checked = true;
                valorLadoIss = ladoA;
                lado = 'A';
                console.log('lado escolhido: ' + radios[i].value);
            } else {
                radios[i].checked = true;
                valorLadoIss = ladoB;
                lado = 'B';
                console.log('lado escolhido: ' + radios[i].value);
            }
        }
    }
}



// DECLARANDO FUNÇÃO E VARIAVEIS PARA AUXILIAR O CÁLCULO DA 
// P-A-R-C-E-L-A
var valorParcelaIss = 0;
var parc = '';
function valorParcela() {
    var radios = document.getElementsByName("parcRadio");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == '1') {
                radios[i].checked = true;
                valorParcelaIss = 0.25;
                parc = '1';
            } else {
                if (radios[i].value == '2') {
                    radios[i].checked = true;
                    valorParcelaIss = 0.5;
                    parc = '2';
                } else {
                    if (radios[i].value == '3') {
                        radios[i].checked = true;
                        valorParcelaIss = 0.75;
                        parc = '3';
                    }
                    else {
                        if (radios[i].value == 'unica') {
                            radios[i].checked = true;
                            valorParcelaIss = 1;
                            parc = 'Única';
                        }
                    }
                }
            }
        }
    }
}

/// CÁLCULO DA TAXA DE 
// E-X-P-E-D-I-E-N-T-E
var TxExpVigente = 60.78;
var valorTxExpIss = TxExpVigente;
function valorTxExp() {
    switch (parc) {
        case 'unica':
            valorTxExpIss = TxExpVigente * 1;
            break;
        case "1":
            valorTxExpIss = TxExpVigente * 1;
            break;
        case "2":
            valorTxExpIss = TxExpVigente * 2;
            break;
        case "3":
            valorTxExpIss = TxExpVigente * 3;
            break;
    }
}



// FUNÇÃO QUE IRÁ  CALCULAR O VALOR DO ISS
var msgConsole = '';
var msgLblPrint = '';
function calcularIss() {
    // DECLARANDO VARIÁVEL PARA RECEBER O VALOR DO INPUT DE AREA, AO MESMO TEMPO QUE É CONVERTIDO PARA INT.
    valorLado();
    valorParcela();
    valorTxExp();
    var inpArea = parseFloat(document.getElementById('inpArea').value);
    var total = 0;

    msgConsole = 'valor de total = ' + total + ', valor da Area = ' + inpArea + ', lado = ' + valorLadoIss + ', parcela = ' + valorParcelaIss + ', parcela num = ' + parc;
    console.log(msgConsole);

    total = inpArea * valorLadoIss * valorParcelaIss;

    msgConsole = 'Area (' + inpArea + ') X lado (' + valorLadoIss + ') X parcela (' + valorParcelaIss + ') = ' + total;
    console.log(msgConsole);

    if (parc != 'unica') {
        total = total * 0.03;
    }
    var issBruto = total.toFixed(2);
    console.log('iss bruto ' +issBruto);
    

    msgConsole = 'Total (apos 3%) = ' + total.toFixed(2);
    console.log(msgConsole);
    msgConsole = 'tx exp: ' + valorTxExpIss;
    console.log(msgConsole);

    total += valorTxExpIss;
    total = total.toFixed(2);

    msgConsole = 'total (c/ tx exp) = ' + total;
    console.log(msgConsole);
    console.log('===========================');

    //MENSAGEM DE SAIDA PARA A LABEL

   
    Mudarestado('tbPrint');
    document.getElementById('tdAreaValor').innerHTML = inpArea + "m²";
    document.getElementById('tdLadoValor').innerHTML = lado + "           (" + valorLadoIss + ")";
    document.getElementById('tdParcValor').innerHTML = parc;
    var auxTxExp = parc;
    if (parc == 'Única'){
        auxTxExp = '1';
    }
    document.getElementById('tdQtdTxExpValor').innerHTML = auxTxExp;
    document.getElementById('tdTxExpValor').innerHTML = 'R$'+valorTxExpIss;

    document.getElementById('tdIssParcial').innerHTML = 'R$ '+ issBruto;
    document.getElementById('tdIssTotal').innerHTML = 'R$'+total;


}
