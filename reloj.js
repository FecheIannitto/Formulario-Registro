const Start = document.getElementById("Start")
const Stop = document.getElementById("Stop")
const Reset = document.getElementById("Reset")
let contadorInterval = null
let contador = 0
let inputs, clock, hora, minutos, segundos




window.addEventListener("load", () => {

    inputs = Array.from(document.getElementsByClassName('number')) //---> Busca los inputs 
    clock = document.querySelector('.minutero') //---> Busca el reloj
})


function arranque() {

    clock.innerHTML = `<p class="number">${hora > 9 ? hora : ('0' + hora)}
        </p><span>hs.</span><p class="number">${minutos > 9 ? minutos : ('0' + minutos)}
        </p><span>min.</span><p class="number">${segundos > 9 ? segundos : ('0' + segundos)}
        </p><span>sec.</span>`



    Start.addEventListener("click", () => {
        contadorInterval = setInterval(() => {


            //console.log(contador)

            contador += 1

        }, 1000)
    })


    Stop.addEventListener("click", () => {
        clearInterval(contadorInterval)
        //console.log("Stop")
    })




    Reset.addEventListener("click", () => {

        clearInterval(contadorInterval)
        contador = 0

        //console.log("Reset")
    })

}