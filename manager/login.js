window.addEventListener("load", () => {

  if (localStorage.getItem('username')) {
      window.location="jugar";
  }

});

document.getElementById('btn_login').addEventListener('click', () => {
  
  if (typeof hive_keychain == "undefined") {
    alert("Instala HIVE KEYCHAIN");
    window.open("https://hive-keychain.com/");
  }
  else {
    let usuario = document.getElementById("usuario_hive").value;

    if(usuario!=""){
      hive_keychain.requestSignBuffer(
        usuario,
        'PARFAIT DE MAZAPAN LOGIN', //Message
        'Posting',
        function (response) {
          //   console.log('main js response - sign');
          //   console.log(response);
          //   console.log(response.data);
          //   console.log(response.data.username);
          if(response.success){
            localStorage.setItem('username', usuario);
            window.location = 'jugar';
          }
          
        },
        null,
        'FIRMAR MENSAJE'
      );
  
    }else{
      alert("Ingresa Usuario de Hive");
    }
    
  }

});
