<?php
$servername="localhost";
$username="root";
$password="";
$database_name="ajuda_db";

$conn=mysqli_connect($servername,$username,$password,$database_name);
if(!$conn)
{
    die("connection failed:". mysqli_connect_errno());
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    // Retrieve the form data
    $name = $_POST['name'];
    $gender = $_POST['gender'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Step 3: Insert the data into the database
    $sql = "INSERT INTO user_reg (name,gender,phone,email,password) VALUES ('$name', '$gender',' $phone',' $email',' $password')";
    
    if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    
    // Step 4: Close the database connection
    mysqli_close($conn);
    
  }
  
  ?>