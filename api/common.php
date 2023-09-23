<?php
  # Autoload classes
  # Since we have multiple folders containing classes, 
  # we need to first check if the class that we want is there
  spl_autoload_register(
    function($class_name){
      if (file_exists("model/" . $class_name . ".php")) {
        require_once "model/" . $class_name . ".php";
      }
      elseif (file_exists("dao/" . $class_name . ".php")){
        require_once "dao/" . $class_name . ".php";
      } 
      else if (file_exists($class_name . ".php")){
        require_once $class_name . ".php";
      } 
    }
  );

  # Start session so that we can use $_SESSION correctly
  session_start();
?>