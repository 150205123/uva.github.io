     // Función para cuando el usuario abandona la pestaña
    window.addEventListener('blur', function() {
        // Cambiar el título de la pestaña
        document.title = '¡No te vayas por favor! 🥺';

        // Cambiar el favicon (puedes cambiar a una imagen que diga algo como "No te vayas")
        var favicon = document.getElementById('favicon');
        favicon.href = 'favicon-sad.ico';  // Reemplaza con el favicon que quieras mostrar

        // Si no tienes un favicon especial, puedes usar una pequeña imagen que transmita el mensaje.
    });

    // Función para cuando el usuario regresa a la pestaña
    window.addEventListener('focus', function() {
        // Cambiar el título de la pestaña
        document.title = '¡Ohhh, qué bueno que volviste! 😍';

        // Restaurar el favicon original
        var favicon = document.getElementById('favicon');
        favicon.href = 'favicon.ico';  // Reemplaza con el favicon original
    });

