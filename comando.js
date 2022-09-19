const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');
const DNI = document.getElementById("dni")

const form = document.querySelector('form');

nombre.addEventListener("blur", () => {
    //nombre.value = null ---> esto es una asignacion

    if (!nombre.value) {
        nombre.setAttribute("placeholder", "*Este campo es requerido!")
        nombre.setAttribute("class", "relleno error")
    } else {
        if (/[0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:.[\]]/.test(nombre.value.trim()) || nombre.value.trim() === "") {

            nombre.setAttribute("class", "relleno error")
            nombre.value = ""
            nombre.setAttribute("placeholder", "*Este campo solo acepta letras!")
        } else {
            nombre.value = nombre.value.trim()
        }
    }
})

nombre.addEventListener("focus", () => {
    nombre.setAttribute("class", "relleno")

})

/*nombre.addEventListener("change", () => {  -----> ver change <-----
 console.log("Esto es el change")

})*/





form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('nombre:', nombre.value, 'apellido:', apellido.value, 'DNI:', DNI.value, 'mail:', email.value, 'password:', password.value)

    if (!nombre.value || !apellido.value || !email.value || !password.value || !DNI.value) {
        alert('Faltan datos')


    }
    else {
        alert('gracias por inscribirte')
    }
    //if (nombre.Value.length <5) {
    //alert('Nombre Muy Corto')
    //}


})