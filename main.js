let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contrasenia = document.getElementById('contrasenia');
let mensajeValidacion = document.getElementById('mensajeValidacion');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){
    
    let numeroDigitado = parseInt (cantidad.value);

    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor a 8.");
        return;
    }

    let password = '';
    for(let i = 0; i < numeroDigitado;i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio; 
    }

    contrasenia.value = password;
    validarContrasenia(password);
}

function limpiar() {
    contrasenia.value = '';
    // Restablecer la barra de fortaleza a su estado inicial
    nivelFuerza.style.width = '0%';
    nivelFuerza.className = '';  // Eliminar las clases que cambian el color
    mensajeValidacion.textContent = '';
}


function validarContrasenia(password) {
    let esFuerte = true;  // Variable para determinar si es fuerte

    // Criterios de fortaleza (si alguno falla, la contraseña será débil)
    if (password.length < 8) {
        esFuerte = false;
    }
    if (!/[A-Z]/.test(password)) {
        esFuerte = false;
    }
    if (!/[a-z]/.test(password)) {
        esFuerte = false;
    }
    if (!/[0-9]/.test(password)) {
        esFuerte = false;
    }
    if (!/[!@#$%^&*()]/.test(password)) {
        esFuerte = false;
    }

    // Actualizar el mensaje de validación según el resultado
    actualizarBarraFortaleza(esFuerte);
}

function actualizarBarraFortaleza(esFuerte) {
    // Reiniciar el estado de la barra y el mensaje
    nivelFuerza.className = '';
    mensajeValidacion.textContent = '';

    if (esFuerte) {
        nivelFuerza.style.width = '100%';
        nivelFuerza.classList.add('fuerte');
        mensajeValidacion.textContent = 'Fuerte';
        mensajeValidacion.style.color = 'lime';
    } else {
        nivelFuerza.style.width = '25%';
        nivelFuerza.classList.add('debil');
        mensajeValidacion.textContent = 'Débil';
        mensajeValidacion.style.color = 'red';
    }
}








