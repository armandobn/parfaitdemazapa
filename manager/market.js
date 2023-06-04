document.getElementById("btn_vender").addEventListener("click", () => {
    let usuario = localStorage.getItem('username');
    venderNft(usuario, 'ssc-testnet-hive', 'https://enginetestnet2.rishipanthee.com').then((v) => {
        console.log(v);
    });
});