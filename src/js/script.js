const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const peso = document.getElementById("weight").value
    const altura = document.getElementById("height").value

    const imc = (peso / ((altura / 100) * (altura / 100))).toFixed(2)

    const valor = document.getElementById("value")
    let descricao = ''

    valor.classList.add("attention")

    document.getElementById("infos").classList.remove("hidden")

    if (imc < 18.5){
        descricao = "Cuidado! Você está abaixo do peso!"
    } else if (imc >= 18.5 && imc <= 25){
        descricao = "Você está no peso ideal!"
        valor.classList.remove("attention")
        valor.classList.add("normal")
    } else if (imc > 25 && imc <= 30){
        descricao = "Cuidado! Você está com sobrepeso!"
    } else if (imc > 30 && imc <= 35){
        descricao = "Cuidado! Você está com obesidade moderada!"
    } else if (imc > 35 && imc <= 40){
        descricao = "Cuidado! Você está com obesidade severa!"
    } else {
        descricao = "Cuidado! Você está com obesidade morbida!"
    }

    valor.textContent = imc.replace(".", ",")

    document.getElementById("description").textContent = descricao
})