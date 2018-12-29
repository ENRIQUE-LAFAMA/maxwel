<?php

include 'prueba.php';

$user = $_POST["user"];
$password = $_POST["password"];


$insertar = "SELECT * FROM usuario WHERE user='$user' AND password='$password'";

$resultado = mysqli_query($conexion, $insertar);
$resultado2 = mysqli_num_rows($resultado);

session_start();
$_SESSION['user']= $user;
if($resultado2>0){
    
    
    header("location:index2.php");
}
else{
    echo "error!!!!";
}

mysqli_close($conexion);
?>