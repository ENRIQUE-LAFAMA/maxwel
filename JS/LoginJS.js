/*NOC SI ESAS X ROJAS SON NORMALES*/

var pantalla = 0;//identificar la pantalla que se visualiza
var gestor1 = 0, gestor2 = 0;
var rememberUser = "", rememberPass = "";//para los retrocesos

var user = "", pass = ""; name = "", lastName = "";
    /*  height: 450px;
    width: 450px;
    margin-left: -225px;
    margin-top: -220px;
    left: 50%;
    top: 50%;
    position: absolute;
    background-color: rgba(255,255,255,0.9);*/
    

function pantalla1(){
   
    var cuadro = document.getElementById("cuadrado");
    var texto = document.getElementById("texto");
    var userInput = document.getElementById("user");
    var passwordInput = document.getElementById("password");
    var boton = document.getElementById("btn");
    var boton2 = document.getElementById("btn2");
    var crearCuenta = document.getElementById("crear");
    var olvido = document.getElementById("olvido");
    var back = document.getElementById("retroceder1_2");
    var identificador = document.getElementById("identificador1_2");
    
    
    cuadro.style.height = "450px";
    cuadro.style.marginTop = "-240px";
    cuadro.style.transition = "0.4s";
    
    texto.innerHTML = "Escribir contraseña";
    texto.style.marginTop = "30%";
    texto.style.transition = "0.4s";
    
    userInput.style.display = "none";
    passwordInput.style.display = "block";
   /* entrada.placeholder = "Contraseña";
    entrada.style.marginTop = "42%";
    entrada.style.transition = "0.4s";*/
    boton2.style.display = "none";
    boton.style.display = "block";
    
    
    crearCuenta.style.display = "none";
    olvido.style.display = "block";
    olvido.style.marginTop = "60%";
    
    rememberUser = userInput.value;
    
    back.style.display = "block";
    identificador.innerHTML = rememberUser;
    identificador.style.display = "block";
}

function pantalla2(){
    
    var cuadro = document.getElementById("crearCuenta");
    var texto = document.getElementById("textoCrear");
    var userInput = document.getElementById("userCrear");
    var passwordInput = document.getElementById("userCrear2");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var boton = document.getElementById("btnCrear");
    var boton2 = document.getElementById("btnCrear2");
    var back = document.getElementById("retroceder2");
    var flechaBack = document.getElementById("retroceder2_2");
    var identificador = document.getElementById("identificador2");
    var parrafo = document.getElementById("moreInformation");
    
    if(gestor2 == 0){
        cuadro.style.height = "450px";
        cuadro.style.marginTop = "-240px";
        cuadro.style.transition = "0.4s";
    
        texto.innerHTML = "Creación de una contraseña";
        texto.style.marginTop = "30%";
        texto.style.transition = "0.4s";
    
        userInput.style.display = "none";
        
        passwordInput.style.display = "block";
    
        back.style.display = "block";
        flechaBack.style.display = "none";
        identificador.innerHTML = userInput.value;
        identificador.style.display= "block";
        rememberUser = userInput.value;
        
        gestor2 = 1;
    }
    
    else if(gestor2 == 1){
        texto.innerHTML = "Crear cuenta";
        texto.style.transition = "0.4s";
        
        rememberPass = passwordInput.value;
        
        passwordInput.style.display = "none";
        
        nombre.style.display = "block";
        apellido.style.display = "block";
        
        parrafo.style.display = "block";
        
        boton2.style.display = "none";
        boton.style.display = "block";
        
        gestor2 = 2;
    }
   
}

function retroceder(){
    
    if(pantalla == 0){
        var cuadro = document.getElementById("cuadrado");
        var texto = document.getElementById("texto");
        var userInput = document.getElementById("user");
        var passwordInput = document.getElementById("password");
        var boton = document.getElementById("btn");
        var crearCuenta =   document.getElementById("crear");
        var olvido = document.getElementById("olvido");
        var back = document.getElementById("retroceder1_2");
        var identificador = document.getElementById("identificador1_2");
    
    
        cuadro.style.height = "350px";
        cuadro.style.marginTop = "-190px";
        cuadro.style.transition = "0.4s";
    
        texto.innerHTML = "Iniciar sesión";
        texto.style.marginTop = "20%";
        texto.style.transition = "0.4s";
    
        boton.value = "Siguiente";
    
        crearCuenta.style.display = "block";
        olvido.style.display = "none";
        olvido.style.marginTop = "43%";
    
        userInput.value = rememberUser;
        passwordInput.style.display = "none";
        userInput.style.display = "block";
        
        back.style.display = "none";
        identificador.innerHTML = "";
        identificador.style.display = "none";
    }
    else if(pantalla == 1){
        var cuadro = document.getElementById("crearCuenta");
        var texto = document.getElementById("textoCrear");
        var userInput = document.getElementById("userCrear");
        var passwordInput = document.getElementById("userCrear2");
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var boton = document.getElementById("btnCrear");
        var back = document.getElementById("retroceder2");
        var flechaBack = document.getElementById("retroceder2_2");
        var identificador = document.getElementById("identificador2");
        var parrafo = document.getElementById("moreInformation");
    
        if(gestor2 == 1){
            cuadro.style.height = "350px";
            cuadro.style.marginTop = "-190px";
            cuadro.style.transition = "0.4s";
    
            texto.innerHTML = "Crear cuenta";
            texto.style.marginTop = "20%";
            texto.style.transition = "0.4s";
    
            passwordInput.style.display = "none";
            
            userInput.style.display = "block";
    
            boton.value = "Siguiente";
            
            flechaBack.style.display = "block";
            back.style.display = "none";
            userInput.value = rememberUser;
            identificador.style.display= "none";
            identificador.innerHTML = "";
        
        
            gestor2 = 0;
        }
    
        else if(gestor2 == 2){
            texto.innerHTML = "Creación de una contraseña";
            texto.style.transition = "0.4s";
        
            passwordInput.value = rememberPass;
            
            passwordInput.style.display = "block";
            
            nombre.style.display = "none";
            
            apellido.style.display = "none";
        
            boton.value = "Siguiente";
            parrafo.style.display = "none";
            gestor2 = 1;
        }
    }
    
}

function cambiarPantalla(){
    var pantalla1 = document.getElementById("cuadrado");
    var pantalla2 = document.getElementById("crearCuenta");
    
    var flechaBack = document.getElementById("retroceder2_2");
    
    var entrada = document.getElementById("user");
    var entrada2 = document.getElementById("userCrear");
    
    if(pantalla == 0){
       
        flechaBack.style.display = "block";
        pantalla1.style.display = "none";
        pantalla2.style.display = "block";
        
        entrada2.value = "";
        pantalla = 1;
    }
    else if(pantalla == 1){
        pantalla1.style.display = "block";
        pantalla2.style.display = "none";
        entrada.value = "";
        pantalla = 0;
    }
   
    
}
   
function alertaOlvido(){
    alert("Nuestro servicio de asistencia se encuentra en mantenimiento en estos momentos, para poder recuperar su contraseña contactenos al 829-477-6963, sentimos los inconvenientes!")
}