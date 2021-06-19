<?php
require 'database.php';
$tenant_id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($db, (int)$_GET['id']) : false;
if(!$tenant_id)
{
	return http_response_code(400);
}

$sql = "DELETE FROM tenant WHERE tenant_id =$id";
if($db->query($sql))
{
	http_response_code(204);
}
else
{
	return http_response_code(422);
}