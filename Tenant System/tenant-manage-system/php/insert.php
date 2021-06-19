<?php
require 'database.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);
	//print_r($request);
	// Validate.
	// if(trim($request->number) === '' || (float)$request->amount < 0)
	// {
	//   return http_response_code(400);
	// }

  $tenant_username = mysqli_real_escape_string($con, trim($request->username));
  $tenant_password = mysqli_real_escape_string($con, trim($request->password));
  $tenant_name = mysqli_real_escape_string($con, trim($request->fullName));
  $tenant_email = mysqli_real_escape_string($con, trim($request->email));
  $tenant_address = mysqli_real_escape_string($con, trim($request->address));
  $tenant_phonenum = mysqli_real_escape_string($con, trim($request->phonenum));
	//store
	// $sql = "INSERT INTO tenant (tenant_id,tenant_username,tenant_password,tenant_email,tenant_name,tenant_address,tenant_address) 
    //       VALUES (null,'$username','$password','$email','$fullName','$address','$address')";
	
	$sql = "INSERT INTO `tenant`(
		
		`tenant_username`,
		`tenant_password`,
		`tenant_name`,
		`tenant_address`,
		`tenant_phonenum`
	) VALUES(
		 '{$username}',
	 '{$password}',
	 '{$email}',
	 '{$fullName}',
	 '{$address}',
	 '{$phonenum}'
	 )";
	if(mysqli_query($con,$sql))
  {
    http_response_code(201);
  }
  else
  {
    http_response_code(422);
  }
}
?>