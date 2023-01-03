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

function teste(){
    var inpArea = parseFloat(document.getElementById('inpArea').value);
    var auxInpArea = arInpArea.push(inpArea);
    var total = arInpArea [arInpArea.length-1] + 1;



    console.log('auxInpArea: '+auxInpArea+'  |  arInpArea: '+   arInpArea [arInpArea.length-1] + '  |  total: '+total.toFixed(2));

}   
// DECLARANDO FUNÇÃO E VARIAVEIS PARA AUXILIAR O CÁLCULO DE 
// L-A-D-O
var arValorLadoIss = [];
var arLadoChar = [];
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
                arLadoChar[arInpArea.length - 1] = 'A';
                console.log('lado escolhido: ' + radios[i].value + ', arValorLadoIss: ' + arValorLadoIss[arInpArea.length - 1] + ', arLadoChar: ' + arLadoChar[arInpArea.length - 1]);
            } else {
                radios[i].checked = true;
                arValorLadoIss[arInpArea.length - 1] = ladoB;
                arLadoChar[arInpArea.length - 1] = 'B';
                console.log('lado escolhido: ' + radios[i].value + ', arValorLadoIss: ' + arValorLadoIss[arInpArea.length - 1] + ', arLadoChar: ' + arLadoChar[arInpArea.length - 1]);
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
                arValorParcelaIss[arInpArea.length - 1] = 0.25;
                arVarcharParc[arInpArea.length - 1] = '1';
            } else {
                if (radios[i].value == '2') {
                    radios[i].checked = true;
                    arValorParcelaIss[arInpArea.length - 1] = 0.5;
                    arVarcharParc[arInpArea.length - 1] = '2';
                } else {
                    if (radios[i].value == '3') {
                        radios[i].checked = true;
                        arValorParcelaIss[arInpArea.length - 1] = 0.75;
                        arVarcharParc[arInpArea.length - 1] = '3';
                    }
                    else {
                        if (radios[i].value == 'unica') {
                            radios[i].checked = true;
                            arValorParcelaIss[arInpArea.length - 1] = 1;
                            arVarcharParc[arInpArea.length - 1] = 'Única';
                        }
                    }
                }
            }
        }
    }
    console.log('arValorParcelaIss: '+arValorParcelaIss[arValorParcelaIss.length-1]+', arVarcharParc: '+arVarcharParc[arVarcharParc.length-1]);
}

