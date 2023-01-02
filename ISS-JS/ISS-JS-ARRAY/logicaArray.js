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

