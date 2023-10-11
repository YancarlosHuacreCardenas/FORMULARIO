// Obtén una referencia al botón y al mensaje de registro
const registerButton = document.getElementById("register-button");
const registrationMessage = document.getElementById("registration-message");

// Agrega un manejador de eventos al botón para cambiar el texto al hacer clic
registerButton.addEventListener("click", function() {
    // Cambia el texto del botón
    registerButton.textContent = "¡Registrado!";
    
    // Muestra el mensaje de registro
    registrationMessage.style.display = "block";
});