

<?php
session_start();
?>



<!DOCTYPE html>
<html>
    <head>
        <title >LUXURYY</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../CSS/GENERAL.CSS">
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
                </ul>
            </nav>
        </header>
        

        <section id="inf">
                       
                <h2>DESTINOS DESTACADOS</h2>
            <div class="contenedor" >
            <a href="../Login.html"><article>
                    <img src="../IMG/DESTINOS/6.jpg">
                    <h4 class="icon-star"> HOTEL GOLDEN - MOSKU</h4>
                </article></a>
                        
                <a href="../Login.html"><article>
                    <img src="../IMG/DESTINOS/1.jpg" >
                        <h4 class="icon-star" >FASHION - CALIFORNIA</h4>
                </article></a>
                    
                <a href="../Login.html"><article>
                    <img src="../IMG/DESTINOS/2.jpg" >
                        <h4 class="icon-star">HILTON - FLORIDA</h4>
                </article></a>
                    
                <a href="../Login.html"><article>
                    <img src="../IMG/DESTINOS/3.jpg" >
                        <h4 class="icon-star" >IBIS - WASHINGRON D.C</h4>
                </article></a>
                    
                <a href="../Login.html"><article>
                    <img src="../IMG/DESTINOS/4.jpg">
                        <h4 class="icon-star">HILTON - LAS VEGAS</h4>
                </article></a>
                <a href="../Login.html"><article>
                    <img src="../IMG/DESTINOS/5.jpg" >
                        <h4 class="icon-star" >
                        J.C - NEW YORK</h4>
                </article></a>
                <a href="../Login.html"><article>
                    <img src="../IMG/DESTINOS/7.jpg" >
                        <h4 class="icon-star" >
                        SAN JUAN'S - PUERTO RICO</h4>
                </article></a>
                <a href="../Login.html"><article>
                    <img src="../IMG/DESTINOS/8.jpg" >
                        <h4 class="icon-star" >
                        Hotel GODWIN - MEXICO</h4>
                </article></a>
            </div>
        </section>
        
    </body>
</html>
