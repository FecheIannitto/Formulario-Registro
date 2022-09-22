const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const DNI = document.getElementById("dni")
const email = document.getElementById('email');
const password = document.getElementById('password');

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

apellido.addEventListener("blur", () => {
    //nombre.value = null ---> esto es una asignacion

    if (!apellido.value) {
        apellido.setAttribute("placeholder", "*Este campo es requerido!")
        apellido.setAttribute("class", "relleno error")
    } else {
        if (/[0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:.[\]]/.test(apellido.value.trim()) || apellido.value.trim() === "") {

            apellido.setAttribute("class", "relleno error")
            apellido.value = ""
            apellido.setAttribute("placeholder", "*Este campo solo acepta letras!")
        } else {
            apellido.value = apellido.value.trim()
        }
    }
})

apellido.addEventListener("focus", () => {
    apellido.setAttribute("class", "relleno")

})


DNI.addEventListener("blur", () => {
    //nombre.value = null ---> esto es una asignacion

    if (!DNI.value) {
        DNI.setAttribute("placeholder", "*Este campo es requerido!")
        DNI.setAttribute("class", "relleno error")
    }
    if ((/^[0-9]{7,8}$/).test(DNI.value)) {

    }

    else {
        DNI.value = ""
        alert("Dni incorrecto")
    }

})

DNI.addEventListener("focus", () => {
    DNI.setAttribute("class", "relleno")

})




email.addEventListener("blur", () => {
    //nombre.value = null ---> esto es una asignacion

    if (!email.value) {
        email.setAttribute("placeholder", "*Este campo es requerido!")
        email.setAttribute("class", "relleno error")
        //email.setAttribute("name", "email rojo")

    }
    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value.trim()) || email.value.trim() === "") {


    } else {
        email.value = email.value.trim()
        alert("El mail " + email.value + " es incorrecto")
    }
})

email.addEventListener("focus", () => {
    email.setAttribute("class", "relleno")

})



password.addEventListener("blur", () => {
    //nombre.value = null ---> esto es una asignacion

    if (!password.value) {
        password.setAttribute("placeholder", "*Este campo es requerido!")
        password.setAttribute("class", "relleno error")
    }
    if ((password.value.length > 4) || password.value.trim() === "") {

    }

    else {
        nombre.value = nombre.value.trim()
        alert("La contraseña es muy corta")
    }
}
)

password.addEventListener("focus", () => {
    password.setAttribute("class", "relleno")

})


form.addEventListener('submit', (e) => {
    e.preventDefault()


    if (!nombre.value || !apellido.value || !email.value || !password.value || !DNI.value) {
        alert('Faltan datos')
    }
    else {
        alert('gracias por inscribirte')
    }
    
})