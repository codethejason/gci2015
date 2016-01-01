<!doctype html>
<html>
<head><title>Simple Web App With Docker</title></head>
<body>
<?php
echo "Hello, I'm running right now!";
$mysql = new mysqli("localhost", "root");
echo "MySQL Server info: ".$mysql->host_info;
?>
</body>
</html>
