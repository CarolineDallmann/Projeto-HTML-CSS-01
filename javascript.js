var getNumero = () => Math.floor(Math.random() * 10 + 1)
const primNum = getNumero()
const segNum = getNumero()
const resultCorreto = primNum + segNum

document.getElementById("labelOperacao").innerHTML = `${primNum} + ${segNum} = ?*`

function clicarBotao() {
    const nome = document.querySelector("#nome")
    const email = document.querySelector("#email")
    const profissional = document.querySelector("#profissionalId")
    const objetivo = document.querySelector("#objetivoId")
    const escolha = document.getElementsByName("escolha")
    const resultUsuario = document.getElementById("operacao")

    if (nome.value === "") {
        alert("Nome é obrigatório.")
        nome.focus()
        return
    }

    if (email.value === "") {
        alert("Email é obrigatório.")
        email.focus()
        return
    }

    if (profissional.value === "" || profissional.value === null) {
        alert("Situação profissional é obrigatório.")
        profissional.focus()
        return
    }

    if (objetivo.value === "" || objetivo.value === null) {
        alert("Objetivo é obrigatório.")
        objetivo.focus()
        return
    }

    if (!escolha[0].checked && !escolha[1].checked) {
        alert("Interesse em iniciar um curso é obrigatório.")
        return
    }

    if (resultUsuario.value === "") {
        alert("Resultado é obrigatório.")
        resultUsuario.focus()
        return
    } 
    if (parseInt(resultUsuario.value) !== resultCorreto) {
        alert("Preencha com um valor válido.")
        resultUsuario.value = ""
        resultUsuario.focus()
        return
    }
    document.querySelector("form").submit()
}




