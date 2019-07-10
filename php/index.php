<html>
<body>
<form action="fileupload" method="post" enctype="multipart/form-data">
<input type="file" name="filetoupload"><br>
<input type="submit">
</form>

<?php
	// This is just a PoC, enable all errors and warnings to illustrate behavior
 	error_reporting( E_ALL ); 
	if(isset($_FILES['filetoupload'])) {
		if(move_uploaded_file($_FILES['filetoupload']['tmp_name'], $_FILES['filetoupload']['name'])) {
			echo "<p>File uploaded: <a href='" . $_FILES['filetoupload']['name'] . "'' target='_blank'>here</a></p><br>";

			try {
				$thumb_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $_FILES['filetoupload']['name'])."_thumb.png";
				$thumb = new Imagick($_FILES['filetoupload']['name']);
				$thumb->resizeImage(320,240,Imagick::FILTER_LANCZOS,1);
				$thumb->writeImage($thumb_name);
				$thumb->destroy(); 
			} catch(Exception $e) {
				echo "<p>Thumbnail rendering failed.</p>";
			}
			echo "<p>Thumbnail: <a href='" . $thumb_name . "'' target='_blank'>here</a></p><br>";
		}
		else echo "<p>An error occurred - could not upload file.</p>";
	}
?>
</html>