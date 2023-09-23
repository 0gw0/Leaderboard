<?php
	class PersonDAO{
		
		#Return all persons 
		function getAll(){
			$connMgr = new ConnectionManager();          
			$connMgr = $connMgr->getConnection(); 

            $sql = "SELECT * FROM person ORDER BY points DESC";
            $stmt = $connMgr->prepare($sql);
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $stmt->execute();
            $result = array();
            while($row = $stmt->fetch()) {
                $person = new Person($row['id'], $row['name'], $row['points']);
                $result[] = array('name' => $person->getName(), 'points' => $person->getPoints());
            }
            $connMgr = null;
            $stmt = null;
            return $result;
		}

		// Update Points
		function UpdatePoints($name, $points){
            $connMgr = new ConnectionManager();          
			$connMgr = $connMgr->getConnection(); 

            $sql = "UPDATE person SET points = points + :points WHERE name = :name";
            $stmt = $connMgr->prepare($sql);
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $stmt->bindParam(':name', $name, PDO::PARAM_STR);
            $stmt->bindParam(':points', $points, PDO::PARAM_INT);
            $status = $stmt->execute();

            $connMgr = null;
            $stmt = null;
            return $status;
		}
	}
?>