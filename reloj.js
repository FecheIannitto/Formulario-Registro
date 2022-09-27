const Start = document.getElementById("Start")
const Stop = document.getElementById("Stop")
const Reset = document.getElementById("Reset")
const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

let contadorInterval = null
let contador = 0
let inputs, clock


Start.addEventListener("click", () => {
    contadorInterval = setInterval(() => {

        setTimer()
        relojDigital()

        console.log("Start")

    }, 1000)
})


Stop.addEventListener("click", () => {
    clearInterval(contadorInterval)
    console.log("Stop")
})

Reset.addEventListener("click", () => {

    clearInterval(contadorInterval)

    contador = 0
    segundos.value = "00"
    minutos.value = "00"
    horas.value = "00"

    console.log("Reset")
})



function setTimer() {

    segundos.value < 9 ? segundos.value = "0" + (contador += 1) : segundos.value = (contador += 1)
    //minutos.value < 9 ? minutos.value = "0" + (contador) : minutos.value = (contador)
    //horas.value < 9 ? horas.value = "0" + (contador += 1) : horas.value = (contador += 1)
    relojDigital()
}


function relojDigital() {

     /* Si tengo más de 0 segundos, restá segundos */
    /* Si tengo 0 segundos pero tengo más de 0 minutos, poné segundos en 59 y restale 1 a minutos */
    /* Si tengo 0 segundos, 0 minutos pero tengo más de 0 horas, poné segundos en 59, minutos en 59 y restale 1 a horas */
    /* Sino arranca la alarma */

    if (segundos.value > 5) {
        segundos.value = 0
    } /*else {
        if (minutos.value > 0) {
            segundos.value = 59;
            minutos.value--;
        } else {
            if (horas.value > 0) {
                segundos.value = 59;
                minutos.value = 59;
                horas.value--;
            } else {
                //alarm.play();
            }
        }
    }*/

    //setTimer();
}

