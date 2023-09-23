<?php
class Person{
	private $id;
	private $name;
	private $points;
	
	public function __construct($id, $name, $points){
		$this->id = $id;
		$this->name = $name;
		$this->points = $points;
	}

	public function getID () {
		return $this->id;
	}

	public function getName () {
		return $this->name;
	}

	public function getPoints () {
		return $this->points;
	}
	
	



}
?>