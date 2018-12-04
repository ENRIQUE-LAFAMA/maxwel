
 
    /*  height: 450px;
    width: 450px;
    margin-left: -225px;
    margin-top: -220px;
    left: 50%;
    top: 50%;
    position: absolute;
    background-color: rgba(255,255,255,0.9);*/
    

function alerta(){
   
    var cuadro = document.getElementById("cuadrado");
    var texto = document.getElementById("texto");
    var entrada = document.getElementById("user");
    var boton = document.getElementById("btn");
    var crearCuenta = document.getElementById("crearCuenta");
    var olvido = document.getElementById("olvido");
   
    
    cuadro.style.height = "450px";
    cuadro.style.marginTop = "-240px";
    cuadro.style.transition = "0.4s";
    
    texto.innerHTML = "Escribir contraseña";
    texto.style.marginTop = "30%";
    texto.style.transition = "0.4s";
    
    entrada.placeholder = "Contraseña";
    entrada.style.marginTop = "42%";
    entrada.style.transition = "0.4s";
    
    boton.value = "Iniciar sesión";
    
    crearCuenta.style.display = "none";
    olvido.style.display = "block";
    olvido.style.marginTop = "60%";
}


   
   