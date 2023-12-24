<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Data Viewer</title>
    <!-- Adicione os links para seus estilos CSS, se necessário -->
</head>
<body>
    <h1>Random Data Viewer</h1>

    <ul>
        @foreach ($data as $user)
            <li>
                <strong>Name:</strong> {{ $user['first_name'] }}<br>
                <strong>Email:</strong> {{ $user['email'] }}<br>
                <!-- Adicione mais campos conforme necessário -->
                <hr>
            </li>
        @endforeach
    </ul>

    <!-- Adicione scripts JavaScript, se necessário -->
</body>
</html>
