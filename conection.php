<?php

$conexion = mysqli_connect("localhost", "root","","BD_ProyectoFinal");

if(!$conexion){
    echo 'Error al conectar a la base de datos';
}

else{
    echo 'Se ha conectado exitosamente a la base de datos';
}