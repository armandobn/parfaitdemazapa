<div class="container mb-5">

    <h3>A divertirse</h3>

    <div class="row">
        <div class="col">
            <div class="row mt-3">
                <div class="col">
                    <button class="btn btn-primary" id="btn_logout">Cerrar Sesion</button>
                    <div class="row rounded border border-primary bg-primary text-light mt-3">
                        <div class="col ">
                            <div id="username">USUARIO</div>
                            <div id="token">DULCE:</div>
                            <div id="nft">NFT:</div>
                            <div id="agil_total">AGIL Total:</div>
                        </div>

                    </div>

                </div>
            </div>

            <div class="row text-center mt-3 mb-3 border border-primary">
                <div class="col">
                    <h3> <strong>Dino Pastelero</strong> </h3>
                    <p>Es un juego divertido donde tendras que evitar los pasteles con tu Dinosario y obten recompensas
                        deacuerdo a tu AGIL total de tus Resposteros
                    </p>
                    <a href="dino" class="btn btn-primary mb-3">Dino Pastelero</a>
                </div>
            </div>


        </div>
        <div class="col">
            <div class="card" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <!-- <button id="btn_market" class="btn btn-primary mb-3">Market</button> -->
                <div class="card-body text-center">
                    <h5 class="card-title"> <strong> Adquirir NFT o TOKEN</strong></h5>
                    <p class="card-text">
                        Pruba tu suerte puedes obtener un NFT RESPOSTERO o TOKEN DULCE
                        <br>
                        Costo: 1 BEE
                    </p>
                    <button id="btn_comprar" class="btn btn-primary mb-3">Comprar</button>
                </div>
            </div>
        </div>
        <div class="col">
            Ver reflejado lo obtenido o Compra
            <button id="btn_atualizar" class="btn btn-primary mb-3">Actualizar Datos</button>
        </div>
    </div>


    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                type="button" role="tab" aria-controls="nav-home" aria-selected="true">Mis NFT</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Cocinar</button>

        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
            tabindex="0">
            <?php require_once 'datos_nft.php' ?>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
            <?php require_once 'cocinar.php' ?>
        </div>

    </div>

</div>
<br>

<script src="manager/jugar.js?v=<?php echo time();?>"></script>