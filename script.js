console.log("Welcome to Geaux Engineering");

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Make Text Appear</title>
    <style>
        #output {
            font-size: 20px;
            color: blue;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Click the Button to Make Text Appear</h1>
    <button id="showTextButton">Show Text</button>
    <div id="output"></div>

    <script>
        // Select the button and the output div
        const button = document.getElementById('showTextButton');
        const outputDiv = document.getElementById('output');

        // Add a click event listener to the button
        button.addEventListener('click', function() {
            // Set the text content of the output div
            outputDiv.innerText = "Hello, this is the text that appeared!";
        });
    </script>
</body>
</html>
