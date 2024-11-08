<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $publish_date = $_POST['publish_date'];

    // Connect to MySQL
    $mysqli = new mysqli("localhost", "root", "", "sciastra");

    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    // Insert the new blog post into the database
    $query = "INSERT INTO blogs (title, content, publish_date) VALUES (?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("sss", $title, $content, $publish_date);
    $stmt->execute();

    $stmt->close();
    $mysqli->close();

    echo "Blog post scheduled successfully!";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin - Blog Management</title>
</head>
<body>
    <h1>Publish New Blog</h1>
    <form action="admin.php" method="POST">
        <label for="title">Blog Title:</label>
        <input type="text" id="title" name="title" required><br><br>
        
        <label for="content">Blog Content:</label>
        <textarea id="content" name="content" rows="5" required></textarea><br><br>
        
        <label for="publish_date">Publish Date:</label>
        <input type="datetime-local" id="publish_date" name="publish_date" required><br><br>
        
        <button type="submit">Publish</button>
    </form>
</body>
</html>
