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
               $host = "localhost";
               $usuario = "root";
               $senha = "123456";
               $bd = "iss";
               try{
               $conecta = new PDO("mysql:dbname=$bd; host=$host; port=3306; charset=utf8", $usuario, $senha);
               $conecta->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
               }catch(PDOException $e){
               echo "falha ao conectar: ".$e->getMessage();
               }    

                $sql = "INSERT INTO obra (area, lado, parcela) VALUES ('".$_POST['area']."', '".$_POST['lado']."', '".$_POST['parcela']."')";
                if ($conecta->query($sql) === TRUE) {
                }else{
                    echo'
                        <table class="w3-table w3-border">
                        <tr class="w3-pink">
                            <th>
                                <td>cod</td>
                                <td>area</td>
                                <td>lado</td>
                                <td>parcela</td>
                                <td>total</td>
                            </th>
                        </tr>
                        </table>
                    ';
                    for()
                }
            ?>
        </div>
    </body>
</html>
