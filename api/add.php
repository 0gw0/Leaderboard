<?php
// api.php

require_once("common.php"); // Include your database connection script

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get the data from the request
  $data = json_decode(file_get_contents("php://input"));

  // Check if required data is present (e.g., name and points)
  if (!empty($data->name) && isset($data->points)) {
    $name = $data->name;
    $points = $data->points;

    // Call the UpdatePoints function
    $dao = new PersonDAO();
    $status = $dao->UpdatePoints($name, $points);

    if ($status) {
      // Return a success response if the update was successful
      http_response_code(200);
      echo json_encode(["message" => "Points updated successfully"]);
    } else {
      // Return an error response if the update failed
      http_response_code(500);
      echo json_encode(["message" => "Failed to update points"]);
    }
  } else {
    // Return a bad request response if required data is missing
    http_response_code(400);
    echo json_encode(["message" => "Missing data"]);
  }
} else {
  // Return a method not allowed response for other HTTP methods
  http_response_code(405);
  echo json_encode(["message" => "Method not allowed"]);
}
