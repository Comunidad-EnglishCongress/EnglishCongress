<?php 

    $upload_dir = "../images/receipts/"; 
    $id_user = $_REQUEST['id'];

    if(isset($_FILES["file"]["type"])) { 
        $validExtensions = array("jpeg", "jpg", "png");
        $temporary = explode(".", $_FILES["file"]["name"]); // Separa el nombre de la imagen
        $file_extension = end($temporary); // Tipo de imagen

        if ( (($_FILES["file"]["type"] == "image/png") || 
              ($_FILES["file"]["type"] == "image/jpg") || 
              ($_FILES["file"]["type"] == "image/jpeg")) && 
            in_array($file_extension, $validExtensions)) {
            if ($_FILES["file"]["error"] > 0) {
                echo "Return Code: " . $_FILES["file"]["error"] . "<br/><br/>";
            } 
            else {
                $sourcePath = $_FILES['file']['tmp_name']; // Storing source path of the file in a variable
                $targetPath = $upload_dir.$id_user.'.'.$file_extension; // Nombre de la imagen
                move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file

                echo 'success';
            }
        } 
    }