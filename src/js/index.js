//- passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const btn = document.querySelector("#button")
const campos = document.querySelectorAll(".campo")
console.log(campos)
console.log(btn)

//- passo 2 - dar um jeito de identificar o clique no elemento da aba
btn.addEventListener("click", function() {
    campos.forEach(function(campo, indice){
        console.log(campo.value)
        verificarInput(campo, indice)
        
    })
})
//- passo 3 - quando o usuário clicar, verificar se a tag está preenchida
function verificarInput(campo,indice){
    let valido = document.querySelector(".valido")
    if(campo.length ===""){
        valido[indice].classList.add("errado")
    } 
    console.log(valido)
}
//- passo 4 - mostrar o conteúdo das tags nos viewCards
