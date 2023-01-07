
// lógica para o envio do formulário

// 1 - pegar o botão de confirm
const btn = document.querySelector("#button")

// 2 - pegar os elementos do cartão e deixar descansando
let viewNunmber = document.querySelector(".card-number-example")
let viewName = document.querySelector(".card-name-example")
let viewDate = document.querySelector(".card-date-example")
let viewCvc = document.querySelector(".card-cvc-example")
const campos = document.querySelectorAll(".campo")


function MasksInputs(){
    const cardName =campos[0]
    cardName.addEventListener("keypress", function(e){
        const keyCode = (e.keyCode ? e.keyCode : e.wich)
        if(keyCode > 47 && keyCode < 58){
            e.preventDefault()
        }
    })

    const cardNumber = campos[1]
    var maskOptions = {
    mask: '0000 0000 0000 0000'
    };
    IMask(cardNumber, maskOptions)

    const cardDateMM = campos[2]
    new Cleave(cardDateMM, {
        date: true,
        datePattern: ['m']
    })

    const cardDateYY  = campos[3]
    new Cleave(cardDateYY, {
        date: true,
        datePattern: ['y']
    })

    const cardCvc = campos[4]
    new Cleave(cardCvc, {
        numeral: true,
        blocks: [3]
    })

}

// 3 - adicionar o evento de clique nele
btn.addEventListener("click",function(evento) { 
    evento.preventDefault() 
    // 4 - percorrer todos os campos existentes no formulário, lembre-se que todos devem ter a mesma classe para serem selecionados no js
    campos.forEach((campo, indice) => {
        verificarMensagemDeErro(campo, indice)
    })
    cadastroFeito()
})

//5  - percorrer todos os campos existentes no formulário,e verificar evento de mudança.

campos.forEach((campo,pipoca) => {
    campo.addEventListener("change", ()=>{
        mostrarValoresDigitados()
    })
})


// 5- usa mesma lógica de validação da quest de form, funciona bem
let validarCampo = document.querySelectorAll(".valido")
function verificarMensagemDeErro(campo,indice){
    if(campo.value === ""){
        validarCampo[indice].classList.add("errado")
    }else if(campo.value !== ""){
        validarCampo[indice].classList.remove("errado")
    }
    if(campos[1].value.length <19) validarCampo[1].classList.add("errado")
    if (campos[2].value.length<2 ||campos[3].value.length < 2)  validarCampo[3].classList.add("errado")
    if (campos[4].value.length<3)  validarCampo[4].classList.add("errado")
}

// 6 - depois de percorrer, só basta fazer o inner html nos elementos do cartão

function mostrarValoresDigitados(){
    let campoName = campos[0].value
    let campoNumber = campos[1].value
    let campoDateMM = campos[2].value
    let campoDateYY = campos[3].value
    let campoCvc = campos[4].value
    campoName !== "" ? viewName.innerHTML = `${campoName}` : viewName.innerHTML = "Jane Appleseed"
    
    campoNumber !== "" ? viewNunmber.innerHTML = `${campoNumber}` : viewNunmber.innerHTML = "0000 0000 0000 0000"

    campoDateMM && campoDateYY !== "" ? viewDate.innerHTML = `${campoDateMM}/${campoDateYY}`: viewDate.innerHTML ="00/00"

    campoCvc !== "" ? viewCvc.innerHTML = `${campoCvc}` : viewCvc.innerHTML = "000"            
}

function cadastroFeito(){
    let campoName = campos[0].value
    let campoNumber = campos[1].value
    let campoDateMM = campos[2].value
    let campoDateYY = campos[3].value
    let campoCvc = campos[4].value
    const caixaBemSucessidido = document.querySelector(".successful")
    const caixaDeCadastro = document.querySelector(".container.fill")
    
    if(campoName !== "" && campoNumber !== "" && campoDateMM !== "" &&campoDateYY !== "" && campoCvc !== "" && campos[1].value.length == 19 && campos[4].value.length == 3 && campos[2].value.length == 2 && campos[3].value.length == 2){
        caixaBemSucessidido.classList.remove("unsuccessful")
        caixaDeCadastro.classList.add("unsuccessful")
    }

}

MasksInputs()