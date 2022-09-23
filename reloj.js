const Start = document.getElementById("Start")
const Stop = document.getElementById("Stop")
const Reset = document.getElementById("Reset")
let contadorInterval = null
let contador = 0


Start.addEventListener("click", () => {
    contadorInterval = setInterval(() => {

        console.log(contador)

        contador += 1

    }, 1000)
})


Stop.addEventListener("click", () => {
    clearInterval(contadorInterval)
    console.log("Stop")
})


Reset.addEventListener("click", () => {

    clearInterval(contadorInterval)
    contador = 0

    console.log("Reset")
})

