// alert('Hello World!')
//
// var teste = prompt('Digite qlqr coisa:')
//
// alert(teste)

function mudaCor() {
    const titulo = document.getElementById('titulo')

    titulo.style.color = 'red'
    titulo.style.fontSize = "50px"
}

function reset() {
    document.getElementById('titulo').innerHTML = 'Bem Vindo!'
}

function addTexto() {
    document.getElementById('titulo').innerHTML += ' Boa Tarde'
}

function resetCor() {
    document.getElementById('titulo')

    const titulo = document.getElementById('titulo')

    titulo.style.color = '#212529'
    titulo.style.fontSize = "40px"
}
function testeInput(){
    const form = document.getElementById('formulario')

    form.value = 'Tarde'
}