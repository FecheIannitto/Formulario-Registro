const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('nombre:', nombre.value, 'apellido:', apellido.value, 'mail:', email.value, 'password:', password.value)

    if (!nombre.value || !apellido.value || !email.value || password.value) {
        console.log('NO hay texto')  

    
    }
    else {
        console.log('gracias por inscribirte')
    }
    //if (nombre.Value.length <5) {
    //alert('Nombre Muy Corto')
    //}


})