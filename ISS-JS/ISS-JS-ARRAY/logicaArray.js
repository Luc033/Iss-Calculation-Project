var lado = [0];
var ladoA = 639.78;
var ladoB = 539.76;
var arInpArea = [];

function teste(){

    //ÁREA 
    /* COMMENT:
        A array conseguiu receber o input html mas, somente, com uma var unidimensional auxiliar. Agora, a array segue 
        manipulável.

    */
    var inpArea = parseFloat(document.getElementById('inpArea').value);
    var auxInpArea = arInpArea.push(inpArea);
    console.log('auxInpArea: '+auxInpArea+'  |  arInpArea: '+   arInpArea);
}   
