<!DOCTYPE html>
<html lang="pt-br">
<!--
        IDEIAS:
            DIGITAR UM NUMERO, SELECIONAR A PARCELA RADIO
            DIGITAR LETRA, SELECIONAR A LADO RADIO
     -->

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <div class="w3-container " style="padding: 100px 300px 10px 300px; text-align: center; height: 1%;">
        <form action="issAction.php" method="POST" class="w3-container w3-pink" style="box-shadow: 10px 5px 5px #ff80b3;padding: 15px 0 0 0">

            <label for="" ">
            <h2 style=" display: inline-block;padding: 4px; color:white;"><b>Área</b></h2>
            </label>
            <input style="width: 30%; margin-left: auto;margin-right: auto;  display: block; text-align: center;" type="number" step="any" name="area" class="w3-input" required ">
        <label for="" style=" margin-left: auto;margin-right: auto; display: block;">
            <h2><b>Lado</b></h2></label>
            <h3 class="btnRadio">
                <input type="radio" name="ladoRadio" value="A" required /><span style="color: yellow;">A</span>
                <input type="radio" name="ladoRadio" value="B" required /><span style="color: black;"><b>B</b></span>
            </h3>
            <label for="" style="display: block;">
                <h2><b>Parcela</b></h2>
            </label>
            <h3 class="btnRadio">

                <input type="radio" name="parcRadio" value="única" required />Única
                <input type="radio" name="parcRadio" value="1" required />1
                <input type="radio" name="parcRadio" value="2" required />2
                <input type="radio" name="parcRadio" value="3" required />3
                <input type="radio" name="parcRadio" value="4" required/>4
            </h3>

            <!--CHAMANDO STYLESHEET DA ESTILIZAÇÃO DO BOTÃO 'ENVIAR'-->
            <link rel="stylesheet" href="style-button.css">
            <button class="button-15" name="btnEnviar" role="button"><B>CALCULAR</B></button>
        </form>

    </div>
</body>

</html>