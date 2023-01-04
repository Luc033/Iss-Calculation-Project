// função para formatar os decimais dos valores
function ajuste(nr, casas) {
    const og = Math.pow(10, casas);
    return Math.trunc(nr * og) / og;
}

// INTERATIVIDADE COM A TABELA
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none") {
        document.getElementById(el).style.display = 'block';
    }
}


//ÁREA 
/* COMMENT:
A array conseguiu receber o input html mas, somente, com uma var unidimensional auxiliar. Agora, a array segue 
manipulável.

*/

var arInpArea = [];
var arTotalIss = [];
var arParcialIss = [];


// FUNÇÃO QUE IRÁ  CALCULAR O VALOR DO ISS

function calcularIss() {
    valorLado();
    valorParcela();
    valorTxExp();
    var inpArea = parseFloat(document.getElementById('inpArea').value);
    var auxInpArea = arInpArea.push(inpArea);
    arParcialIss [arParcialIss.length-1] = arInpArea[arInpArea.length - 1] * arValorParcelaIss [arValorParcelaIss.length - 1] * arValorLadoIss [arValorLadoIss.length - 1];


    if (arVarcharParc [arVarcharParc.length-1] != 'unica') {
        arParcialIss [arParcialIss.length - 1] = arParcialIss [arParcialIss.length - 1] * 0.03;
        arParcialIss [arParcialIss.length - 1] = ajuste(arParcialIss [arParcialIss.length - 1], 2);
    }
    arTotalIss [arTotalIss.length - 1] = arParcialIss [arParcialIss.length - 1] + arValorTxExpIss [arValorTxExpIss.length - 1];
    arTotalIss [arTotalIss.length - 1] = ajuste( arTotalIss [arTotalIss.length - 1],2);

    
    console.log('Id: ' + auxInpArea +  ' | Area entrada: ' + arInpArea[arInpArea.length - 1] + ' | Lado: '+arVarcharLado [arVarcharLado.length-1] + ' ('+ arValorLadoIss[arValorLadoIss.length-1]+') | Parcela: ' + arVarcharParc [arVarcharParc.length-1] +' ('+arValorParcelaIss[arValorParcelaIss.length-1]+') | Tx Exp: '+arValorTxExpIss[arValorTxExpIss.length-1]+ ' | Iss parcial: '+ arParcialIss[arParcialIss.length-1]+' |  Iss Total: ' + arTotalIss[arTotalIss.length-1]);

}
// DECLARANDO FUNÇÃO E VARIAVEIS PARA AUXILIAR O CÁLCULO DE 
// L-A-D-O
var arValorLadoIss = [];
var arVarcharLado = [];
var ladoA = 639.78;
var ladoB = 539.76;

function valorLado() {
    var radios = document.getElementsByName("ladoRadio");
    var inpArea = parseFloat(document.getElementById('inpArea').value);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value === 'A') {
                radios[i].checked = true;
                arValorLadoIss[arInpArea.length - 1] = ladoA;
                arVarcharLado[arInpArea.length - 1] = 'A';
                console.log('lado escolhido: ' + radios[i].value + ', arValorLadoIss: ' + arValorLadoIss[arInpArea.length - 1] + ', arVarcharLado: ' + arVarcharLado[arInpArea.length - 1]);
            } else {
                radios[i].checked = true;
                arValorLadoIss[arInpArea.length - 1] = ladoB;
                arVarcharLado[arInpArea.length - 1] = 'B';
                console.log('lado escolhido: ' + radios[i].value + ', arValorLadoIss: ' + arValorLadoIss[arInpArea.length - 1] + ', arVarcharLado: ' + arVarcharLado[arInpArea.length - 1]);
            }
        }
    }

}

// DECLARANDO FUNÇÃO E VARIAVEIS PARA AUXILIAR O CÁLCULO DA 
// P-A-R-C-E-L-A
var arValorParcelaIss = [];
var arVarcharParc = [];
function valorParcela() {
    var radios = document.getElementsByName("parcRadio");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == '1') {
                radios[i].checked = true;
                arValorParcelaIss[arValorParcelaIss.length - 1] = 0.25;
                arVarcharParc[arVarcharParc.length - 1] = '1';
            } else {
                if (radios[i].value == '2') {
                    radios[i].checked = true;
                    arValorParcelaIss[arValorParcelaIss.length - 1] = 0.5;
                    arVarcharParc[arVarcharParc.length - 1] = '2';
                } else {
                    if (radios[i].value == '3') {
                        radios[i].checked = true;
                        arValorParcelaIss[arValorParcelaIss.length - 1] = 0.75;
                        arVarcharParc[arVarcharParc.length - 1] = '3';
                    }
                    else {
                        if (radios[i].value == 'unica') {
                            radios[i].checked = true;
                            arValorParcelaIss[arValorParcelaIss.length - 1] = 1;
                            arVarcharParc[arVarcharParc.length - 1] = 'Única';
                        }
                    }
                }
            }
        }
    }
    console.log('arValorParcelaIss: '+arValorParcelaIss[arValorParcelaIss.length-1]+', arVarcharParc: '+arVarcharParc[arVarcharParc.length-1]);
}

/// CÁLCULO DA TAXA DE 
// E-X-P-E-D-I-E-N-T-E
var TxExpVigente = 57.99;
var arValorTxExpIss =  [];

function valorTxExp() {
    switch (arVarcharParc[arVarcharParc.length-1]) {
        case 'Única':
            arValorTxExpIss [arValorTxExpIss.length-1]= TxExpVigente * 1;
            break;
        case "1":
            arValorTxExpIss [arValorTxExpIss.length-1]= TxExpVigente * 1;
            break;
        case "2":
            arValorTxExpIss [arValorTxExpIss.length-1]= TxExpVigente * 2;
            break;
        case "3":
            arValorTxExpIss [arValorTxExpIss.length-1]= TxExpVigente * 3;
            break;
    }
    console.log("tx exp valor: "+arValorTxExpIss[arValorTxExpIss.length-1] );
}


