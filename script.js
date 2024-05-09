cambio = false;
function cambiarBoton() {
    let bot = document.getElementById("bot1");
    if (cambio==false){
        
        bot.setAttribute('class','boton2');
        cambio= true;
    } else {
        bot.setAttribute('class','botonMio');
        cambio= false;
    }
}