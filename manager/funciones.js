async function payToken(cuenta_envia, ip, rpc_servidor) {
    let json = {
        contractName: "tokens",
        contractAction: "transfer",
        contractPayload: {
            symbol: 'BEE', // EL SïMBOLO DE TU TOKEN
            to: 'misticogama', // LA CUENTA DE DESTINO
            quantity: '1.000',  // CANTIDAD SIEMPRE CON AL MENOS TRES DECIMALES AUNQUE SEAN CEROS
            memo: 'memo' //MEMO
        },
    };
    return new Promise((resolve, reject) => {
        hive_keychain.requestCustomJson(
            cuenta_envia, //CUENTA ENVIA
            ip, //IP
            'Active', // METHOD
            JSON.stringify(json), //JSON
            'Pago BEE testing', //MESSAGE
            function (response) { //FUNCTION
                if (response.success == false) {
                    // console.log(response);
                    resolve(false);
                }
                else if (response.success == true) {
                    // console.log(response);
                    resolve(response.success);
                }
            },
            rpc_servidor //RPC_SERVIDOR
        );
    });

};

function probability(n) {
    return Math.random() * 100 < n;
}

async function generateToken(user, token, cantidad, ACTIVEKEY, HIVE_ENGINE_CHAIN_ID) {
    let json = {
        contractName: "tokens",
        contractAction: "issue",
        contractPayload: {
            symbol: token,
            to: user,
            quantity: cantidad,
        },
    };

    return new Promise((resolve, reject) => {
        hive.broadcast.customJson(
            ACTIVEKEY,
            ["misticogama"],
            [],
            HIVE_ENGINE_CHAIN_ID,
            JSON.stringify(json),
            async function (err, result) {
                if (err) {
                    resolve(
                        await generateToken(user, token, ACTIVEKEY, HIVE_ENGINE_CHAIN_ID)
                    );
                } else {
                    resolve(json.contractPayload.quantity);
                }
            }
        );
    });
};

async function generateNfts(user, quantity, ACTIVEKEY, HIVE_ENGINE_CHAIN_ID) {
    let instances = [];

    const properties = {
        LVL: Math.round(Math.random(1) * ((10 - 1)) + 1),
        AGIL: Math.round(Math.random(1) * ((100 - 1)) + 1),
        CREATIVE: Math.round(Math.random(1) * ((100 - 1)) + 1),
    };

    const instance = {
        symbol: 'RPT',
        to: user,
        feeSymbol: "BEE",
        properties,
    };

    for (let index = 0; index < quantity; index++) {
        instances.push(instance);
    }

    let json = {
        contractName: "nft",
        contractAction: "issueMultiple",
        contractPayload: {
            instances: instances,
        },
    };

    return new Promise((resolve, reject) => {
        hive.broadcast.customJson(
            ACTIVEKEY,
            ['misticogama'],
            [],
            HIVE_ENGINE_CHAIN_ID,
            JSON.stringify(json),
            function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(json.contractPayload);
                }
            }
        );
    });
}

async function venderNft(cuenta_envia, ip, rpc_servidor) {
    let json = {

        "contractName": "market",
        "contractAction": "marketSell",
        "contractPayload": {
            "symbol": "BEE",
            "quantity": "1",
            "price": "1"
        }

    };
    return new Promise((resolve, reject) => {
        hive_keychain.requestCustomJson(
            cuenta_envia, //CUENTA ENVIA
            ip, //IP
            'Active', // METHOD
            JSON.stringify(json), //JSON
            'Pago BEE testing', //MESSAGE
            function (response) { //FUNCTION
                if (response.success == false) {
                    // console.log(response);
                    resolve(response);
                }
                else if (response.success == true) {
                    // console.log(response);
                    // resolve(response.success);
                    // console.log(response);
                    resolve(response);
                }
            },
            rpc_servidor //RPC_SERVIDOR
        );
    });

};