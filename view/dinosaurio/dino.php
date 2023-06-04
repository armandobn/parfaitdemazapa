<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dinosaurio Chrome V2</title>
    <style>

* {
    padding: 0;
    margin: 0;
}

body{
    height: 100vh;
    background: #584040;
    display: flex;
    align-items: center;
}

.contenedor {
    width: 920px;
    height: 280px;
    margin: 0 auto;
    
    position: relative;

    background: linear-gradient(#b7d6c7, transparent) #ffe2d1;/*linear-gradient(#90ebff, white);*/
    transition: background-color 1s linear;
    overflow: hidden;
}

.mediodia {
    background-color: #ffdcf3;
}

.tarde {
    background-color: #ffadad;
}

.noche {
    background-color: #aca8c7;
}

.dino {
    width: 84px;
    height: 84px;

    position: absolute;
    bottom: 22px;
    left: 42px;
    z-index: 2;

    background: url(raw/img/dinosaurio/dino.png) repeat-x 0px 0px;
    background-size: 336px 84px;
    background-position-x: 0px;

}

.dino-corriendo {
    animation: animarDino 0.25s steps(2) infinite;
}
.dino-estrellado {
    background-position-x: -252px;
}

.suelo {
    width: 200%;
    height: 42px;

    position: absolute;
    bottom: 0;
    left: 0;

    background: url(raw/img/dinosaurio/suelo.png) repeat-x 0px 0px;
    background-size: 50% 42px;

}

.cactus{
    width: 46px;
    height: 96px;

    position: absolute;
    bottom: 16px;
    left: 600px;
    z-index: 1;

    background: url(raw/img/dinosaurio/pastel1.png) no-repeat;
}
.cactus2{
    width: 98px;
    height: 66px;

    background: url(raw/img/dinosaurio/pastel2.png) no-repeat;
}

.nube{
    width: 92px;
    height: 26px;

    position: absolute;
    z-index: 0;

    background: url(raw/img/dinosaurio/nube1.png) no-repeat;
    background-size: 92px 26px;
}

.score{
    width: 100px;
    height: 30px;

    position: absolute;
    top: 5px;
    right: 15px;
    z-index: 10;

    color: #d48871;
    font-family: Verdana;
    font-size: 30px;
    font-weight: bold;
    text-align: right;
}

.game-over{
    display: none;

    position: absolute;
    width: 100%;


    text-align: center;
    color: #7e928b;
    font-size: 30px;
    font-family: Verdana;
    font-weight: 700;
}

@keyframes animarDino{
    from{
        background-position-x: -84px;
    }
    to{
        background-position-x: -252px;
    }
}


    </style>
</head>
<body>

    <div class="contenedor">

        <div class="suelo"></div>
        
        <div class="dino dino-corriendo"></div>

        <div class="score">0</div>

    </div>

    <div class="game-over">GAME OVER</div>
    

    <script src="manager/dinosaurio/dinosaurio.js?v=<?php echo time();?>"></script>
</body>
</html>