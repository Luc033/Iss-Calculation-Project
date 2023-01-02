<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <title>Document</title>
    </head>

    <body>
        <div class="w3-container w3-purple">
            <?php
                $servername = "localhost";
                $username = "root";
                $password = "123456";
                $dbname = "iss";
                $conexao = new mysqli($servername, $username, $password, $dbname);
                if ($conexao->connect_error) {
                die("Connection failed: ".$conexao->connect_error);
                }else{
                    echo "entrou <br>";
                }     
                
                // VERIFICANDO SE O RADIO DE LADO FOI SELECIONADO  
                $auxLado = "";
                if (isset($_POST['ladoRadio'])) {
                    $auxLado = $_POST['ladoRadio'];
                }else{  
                    echo 'error na var auxLado ('.$auxLado.')<br>';
                }

                // VERIFICANDO SE O RADIO DE PARCELA FOI SELECIONADO
                $auxParc = 0;
                if (isset($_POST['parcRadio'])) {
                    $auxParc = $_POST['parcRadio'];
                }else{  
                    echo 'error na var parcLado ('.$parcLado.')<br>';
                }


                //INSERINDO O FORM NO BANCO DE DADOS OBRA
                $sql = "INSERT INTO obra (area, lado, parcela) VALUES ('".$_POST['area']."', '".$auxLado."', '".$auxParc."')";

                //CONSULTANDO SE FOI DE FATO INSERIDO COM SUCESSO
                if ($conexao->query($sql) === TRUE) {
                echo 'adicionado com suceesso.';    
                }else{
                    echo'error'. $sql . "<br>" . $conexao->error;
                }

                
                
                //CALCULANDO O VALOR TOTAL
                //DECLARANDO VARIAVES PARA RECEBER OS VALORES DO FORM
                $total = 0;
                $auxArea = $_POST['area']; 
                $valorParc = 0;
                $valorLado = 0;
                $txExpediente = 54.47;
                $valorLadoA = 639.75;
                $valorLadoB = 539.76;
                $valorTxExp = 0;

                //VERIFICANDO A SELEÇÃO DO LADO E DEFININDO O VALOR CALCULAVEL DO RESPECTIVO LADO
                if($auxLado === 'A'){
                    $valorLado = $valorLadoA;
                }else{
                    $valorLado = $valorLadoB;
                }

                //VERIFICANDO A SELEÇÃO DO PARCELA E DEFININDO O VALOR CALCULAVEL DO RESPECTIVO PARCELA
                 if ($auxParc == 1){
                    $valorParc = 0.25;
                }elseif ($auxParc == 2){
                    $valorParc = 0.50;
                }elseif ($auxParc == 3){
                    $valorParc = 0.75;
                }elseif ($auxParc == unica){
                    $valorParc = 1;
                }else {
                    echo '<br>erro auxPac/valorParc<br>';
                }
                
                //CALCULANDO O VALOR DA TX. DE EXPEDIENTE
                if ($auxParc == 1){
                    $valorTxExp = $txExpediente;
                }elseif ($auxParc == 2){
                    $valorTxExp = $txExpediente * 2;
                }elseif ($auxParc == 3){
                    $valorTxExp = $txExpediente * 3;
                }elseif ($auxParc == 4){
                    $valorTxExp = $txExpediente * 4;
                }
                //CALCULANDO O TOTAL
                $total = 0;
                $total = $auxArea * $valorLado * $valorParc;
                $total = $total * 0.03;
                $total = $total + $valorTxExp;
                
                
                echo "<br> tx. expediente anual = $txExpediente, valor da tx de exp. aplicada = $valorTxExp, ISS = $total";



                
                //ENCERRANDO A CONEXÃO
                $conexao->close();
            ?>
            <a href="iss.php">
                <button onclick="" style="display: block; background-color: red; margin: 10px;" name="btnVoltar" class="w3-button"><B>VOLTAR</B></button>
            </a>
        </div>
    </body>
</html>