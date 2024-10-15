// Cuando el usuario haga clic en "Cerrar Sesión"
document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se comporte como un enlace tradicional
    
    // Aquí puedes eliminar cualquier sesión si la estuvieras usando
    alert("Has cerrado sesión exitosamente.");

    // Redirige al usuario a la página de inicio de sesión
    window.location.href = "index.html";
});
