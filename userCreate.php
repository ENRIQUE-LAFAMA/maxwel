<?php

include 'conection.php';



$user = $_POST["user"];
$password = $_POST["password"];
$name = $_POST["name"];
$lastname = $_POST["lastname"];

$insertar = "INSERT INTO datosdeusuario (user, password, name, lastname) VALUES ('$user','$password','$name','$lastname')";

$resultado = mysqli_query($conexion, $insertar);

if(!$resultado){
    echo "Error al registrar datos";
}
else{
    echo "Registro Exitoso!";
}

mysqli_close($conexion);
