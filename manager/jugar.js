
window.addEventListener("load", () => {

    cargar_datos();
    if (!localStorage.getItem('username')) {
        window.location = "inicio";
    }

});

const ssc = new SSC('https://enginetestnet2.rishipanthee.com');


function cargar_datos() {

    let username = localStorage.getItem('username');

    // ssc.getContractInfo('tokens', (err, result) => {
    //     // console.log(err, result);
    // })

    async function getNFT(limit) {
        const dato_nft = new Array;
        let num = 0;
        let cont = 0;
        let elemento = '';
        let option = '<option value="0" selected>Selecciona tu Chef</option>';
        let agil_total = 0;
        do {
            const nft = await ssc.find('nft', 'RPTinstances', { 'account': `${username}` }, limit, 0, [], (err, result) => { });

            nft.forEach(element => {
                dato_nft.push(element);
            });

            num = nft.length;
            cont = cont + limit;

        } while (num == limit);

        // console.log(dato_nft);
        dato_nft.forEach(function callback(element, index) {
            elemento = `${elemento}
            <tr>
                <td>#${element._id}</td>
                <td>${element.properties.LVL}</td>
                <td>${element.properties.CREATIVE}</td>
                <td>${element.properties.AGIL}</td>
            </tr>
            `;
            option = `${option}
                <option value="${element._id}">#${element._id}
                    LVL:${element.properties.LVL}
                    CREATIVE:${element.properties.CREATIVE}
                    AGIL:${element.properties.AGIL}
                </option>
            `;
            agil_total = agil_total + element.properties.AGIL;
        });



        return [elemento, dato_nft.length, option, agil_total];
    }

    async function add() {
        const balance = await ssc.find('tokens', 'balances', { 'symbol': 'DULCE', 'account': `${username}` }, 1000, 0, [], (err, result) => {

        })
        const nft = await getNFT(1000);
        return [balance[0].balance, nft[0], nft[1], nft[2], nft[3]];
    }

    add().then(v => {
        document.getElementById('username').innerHTML = `USUARIO: ${username}`;
        document.getElementById('token').innerHTML = `DULCE: ${v[0]}`;
        document.getElementById('nft').innerHTML = `NFT: ${v[2]}`;
        document.getElementById('nft_cook').innerHTML = v[1];
        document.getElementById('floatingSelectCocinero').innerHTML = v[3];
        document.getElementById('agil_total').innerHTML =`AGIL Total: ${v[4]}`;
        localStorage.setItem('agil_total', v[4]);
    });

}

document.getElementById("btn_comprar").addEventListener("click", () => {
    let usuario = localStorage.getItem('username');
    hive_keychain.requestHandshake(function () {

        payToken(usuario, 'ssc-testnet-hive', 'https://enginetestnet2.rishipanthee.com').then((v) => {

            if (v) {
                axios({
                    method: 'get',
                    url: 'control/api.php',
                }).then(function (response) {

                    if (probability(20)) {
                        generateNfts(usuario, 1, response.data, 'ssc-testnet-hive').then(n => {
                            // cargar_datos();
                            alert(
                                `Repostero: \n
                            Nivel: ${n.instances[0].properties.LVL} \n
                            Agilidad: ${n.instances[0].properties.AGIL} \n
                            Creatividad: ${n.instances[0].properties.CREATIVE}`
                            );

                        });
                    } else {
                        // cargar_datos();
                        let cantidad = Math.round(Math.random(1) * ((10 - 1)) + 1).toFixed(3);
                        generateToken(usuario, 'DULCE', cantidad, response.data, 'ssc-testnet-hive').then(t => {
                            alert("Tokens ganados---- DULCE: " + t);
                        })
                    }

                });
            } else {
                alert("Operacion Cancelada");
            }




        });

    });




    // createNft(usuario,1,'ssc-testnet-hive','https://enginetestnet2.rishipanthee.com');
    // createToken(usuario,'ssc-testnet-hive','https://enginetestnet2.rishipanthee.com');
    // payToken(usuario,'ssc-testnet-hive','https://enginetestnet2.rishipanthee.com');


});

document.getElementById("btn_logout").addEventListener("click", () => {
    localStorage.removeItem('username');
    window.location = "inicio";
});

document.getElementById("btn_atualizar").addEventListener("click", () => {
    window.location = "actualizar";
});

async function nft_cocinar(idCocinero) {
    const nft = ssc.find('nft', 'RPTinstances', { '_id': parseInt(idCocinero), 'account': `${localStorage.getItem('username')}` }, 100, 0, [], (err, result) => {
        // console.log(result);
    });

    return nft;
}

document.getElementById("btn_cocinar").addEventListener("click", () => {
    // window.location = "actualizar";


    let idCocinero = document.getElementById("floatingSelectCocinero").value;
    let idPostre = document.getElementById("floatingSelectPostre").value;

    // console.log(idPostre);
    // console.log(idCocinero);

    if (idCocinero != 0 && idPostre != 0) {


        document.getElementById("floatingSelectCocinero").disabled = true;
        document.getElementById("floatingSelectPostre").disabled = true;
        document.getElementById("btn_cocinar").disabled = true;

        let tokens;
        let tiempo;
        let minutos;
        let segundos;
        const fecha = new Date();

        nft_cocinar(idCocinero).then(result => {
            // console.log(result);
            // console.log(result[0]);
            tokens = result[0].properties.LVL * (result[0].properties.CREATIVE / 100);
            tiempo = 0 + idPostre * 10 + (result[0].properties.AGIL / result[0].properties.LVL);
            // tiempo = 60 + idPostre * 10 + (result[0].properties.AGIL / result[0].properties.LVL) * 60;
            // console.log(tokens);

            // console.log("tiempo: " + tiempo);
            minutos = Math.round(tiempo / 60);
            segundos = tiempo % 60;

            //Tiempo Total traduso en tardarse
            // console.log("Minutos: " + minutos);
            // console.log("Segundos: " + segundos);

            simplyCountdown('#cocinando', {
                year: fecha.getUTCFullYear(), // required
                month: fecha.getUTCMonth() + 1, // required
                day: fecha.getUTCDate(), // required
                hours: fecha.getUTCHours() - 10, // Default is 0 [0-23] integer
                minutes: fecha.getUTCMinutes() + minutos, // Default is 0 [0-59] integer
                seconds: fecha.getUTCSeconds() + segundos, // Default is 0 [0-59] integer
                words: { //words displayed into the countdown
                    days: { singular: 'day', plural: 'days' },
                    hours: { singular: 'hour', plural: 'hours' },
                    minutes: { singular: 'minute', plural: 'minutes' },
                    seconds: { singular: 'second', plural: 'seconds' }
                },
                plural: true, //use plurals
                inline: true, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
                inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
                // in case of inline set to false
                enableUtc: true, //Use UTC or not - default : false
                onEnd: function () {

                    axios({
                        method: 'get',
                        url: 'control/api.php',
                    }).then(function (response) {
                        let cantidad = tokens.toFixed(3);
                        generateToken(localStorage.getItem('username'), 'DULCE', cantidad, response.data, 'ssc-testnet-hive').then(t => {
                            // console.log("tokens, ganados"+t);
                            alert("Tokens ganados---- DULCE: " + t);
                            document.getElementById("floatingSelectCocinero").disabled = false;
                            document.getElementById("floatingSelectPostre").disabled = false;
                            document.getElementById("btn_cocinar").disabled = false;
                        })


                    });
                    return;
                }, //Callback on countdown end, put your own function here
                refresh: 1000, // default refresh every 1s
                sectionClass: 'simply-section', //section css class
                amountClass: 'simply-amount', // amount css class
                wordClass: 'simply-word', // word css class
                zeroPad: false,
                countUp: false
            });
        });


    } else {
        alert("Selecciona Cocinero o Postre");
    }

});

document.getElementById("btn_market").addEventListener("click", () => {
    window.location = "market";
});
// axios({
//     method: 'POST',
//     url: 'https://enginetestnet2.rishipanthee.com/contracts',
//     data: { "jsonrpc": "2.0", "method": "find", "params": { "contract": "tokens", "table": "balances", "query": { "symbol": "DULCE" }, "offset": 0, "limit": 100, "indexes": [] }, "id": 1 },
// }).then(function (response) {
//     response.data.result.forEach(element => {
//         console.log(element.account);
//     });
//     // console.log(response.data.result[0].account);
// });