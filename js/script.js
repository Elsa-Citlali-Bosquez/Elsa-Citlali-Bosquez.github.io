function validarFormulario() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Usuario y contraseña predefinidos
    const usuarioCorrecto = "usuario";
    const contrasenaCorrecta = "1234";
    
    if (username === usuarioCorrecto && password === contrasenaCorrecta) {
        window.location.href = "dashboard.html"; // Redirigir al dashboard si es correcto
        return false;
    } else {
        document.getElementById('errorMessage').innerText = "Usuario o contraseña incorrectos";
        return false;
    }
}
