<?php
require 'database.php';

  $token = null;
  $headers = apache_request_headers();
  //print_r($headers);


 $postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  //print_r($request);
  
  // Sanitize.
   $tenant_email = $request->email;
   $tenant_password = $request->password;
  
  if($tenant_email=='allyshajin16@gmail.com' && $tenant_password=='160598'){

   echo json_encode(
            array(
                "message" => "Successful login.",
                "token" => 'Bearer-jsdfnkj223',
                "email" => $tenant_email,
            ));
         http_response_code(200);
    }
    else{

       // http_response_code(401);
        echo json_encode(array("message" => "Login failed."));
    }
}
?>
