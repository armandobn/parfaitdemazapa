<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php require_once 'control/dependencias.php'?>
    <title>Document</title>
</head>

<body>


    



        <?php 
        
        if(isset($_GET['vista'])){

            $direccion_solicitada = explode('/', $_GET['vista']);

            switch($direccion_solicitada[0]){

                case 'inicio' :{
                    require_once 'view/barra.php';
                    require_once 'view/inicio.php';
                    require_once 'view/footer.php';
                    break;
                }

                case 'jugar':{
                    require_once 'view/barra.php';
                    require_once 'view/jugar.php';
                    require_once 'view/footer.php';
                    break;
                }

                case 'dino':{
                    require_once 'view/dinosaurio/dino.php';
                    break;
                }

                case 'actualizar':{
                    require_once 'view/barra.php';
                    require_once 'view/actualizar.php';
                    require_once 'view/footer.php';
                    break;
                }

                case 'market':{
                    require_once 'view/barra.php';
                    require_once 'view/market.php';
                    require_once 'view/footer.php';
                    break;
                }

                default :{
                    require_once 'view/barra.php';
                    require_once 'view/inicio.php';
                    require_once 'view/footer.php';
                    break;
                }
            
            }

        }else{
            require_once 'view/barra.php';
            require_once 'view/inicio.php';
            require_once 'view/footer.php';
        }

        ?>

    


</body>

</html>