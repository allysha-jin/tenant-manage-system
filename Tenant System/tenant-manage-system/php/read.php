<?php
require 'database.php';
error_reporting(E_ERROR);
$tenant = [];
$sql = "SELECT tenant_id, tenant_username, tenant_password, tenant_email, tenant_name, tenant_address, tenant_phonenum FROM tenant";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $tenant[$cr]['tenant_id']    = $row['id'];
    $tenant[$cr]['tenant_username'] = $row['username'];
    $tenant[$cr]['tenant_password'] = $row['password'];
    $tenant[$cr]['tenant_email'] = $row['email'];
    $tenant[$cr]['tenant_name'] = $row['fullName'];
    $tenant[$cr]['tenant_address'] = $row['address'];
    $tenant[$cr]['tenant_phonenum'] = $row['phonenum'];
    $cr++;
  }
    

  echo json_encode($tenant);
}
else
{
  http_response_code(404);
}
?>