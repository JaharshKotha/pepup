<?php
$name=$_POST['FLname']
$email=$_POST['email']
$password=$_POST['pass']
$rpassword=$_POST['rpass']
$phone=$_POST['phone']
$db="localhost"
$dbuser="pepup"
$dbpass="getfit2day"

$connect=mysql_connect($db,$dbuser,$dbpass)
mysql_select_db($db);
$quer="INSERT INTO SIGNUP VALUES($name,$email,$password,$phone);"

mysql_query($quer);

?>