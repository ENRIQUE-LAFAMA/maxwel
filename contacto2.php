

<?php
session_start();
?>



<!DOCTYPE html>
<html>
    <head>
        <title>LUXURY</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../css/GENERAL.CSS">
    </head>
    <body>
        <header>
          <input type="checkbox" id="check-menu">
          <label class="icon-menu" for="check-menu"></label>
          <a href="../index.html"> <img src="../IMG/Logo.png" alt="" id="Logo">
            <img src="../IMG/LogoText1.png" alt="" id="LogoText"></a>
          <nav class="menu">
           <ul>
            
            <li><a href="../index.html">INICIO</a></li>
            <li><a href="CONTACTO.HTML">CONTACTOS</a></li>
            <li><a href="RESERVAR.HTML">RESERVAR</a></li>
            <li><a href="Destino.html">DESTINO</a></li>
            <a href=""><?php echo $_SESSION['user']?></a>
            
           <div class="cont-login">
                <form action="">
                <input type="text" placeholder="&#128272; Correro electronico" name="usuario">
                <input type="password" placeholder="&#128272; Password" name="pasword">
                <input type="sumit" id="boton-login" value="login" >
                
                </form>
            </div> 
            </ul>
            </nav>
        </header>
        <section id= "intro"><br><br><br>
            <h1>HOTEL LUXURY</h1><br><br>
            <p>Puede segirnos y/o comunicarse con nosotros a travez de las siguientes medios:</p>
            <img src="../IMG/contacto/FACEBOOK2.jpg" alt="FACEBOOK">
             <img src="../img//contacto/whatsapp.png" alt="WHATSAPP">
            <img src="../IMG/contacto/TWITTER.png" alt="TWITTER">
            <img src="../img/contacto/GMAIL.png" alt="E-MAIL">
           
            
        </section>
        
        
    </body>
</html>
