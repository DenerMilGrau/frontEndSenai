// alert('Hello World!')
//
// var teste = prompt('Digite qlqr coisa:')
//
// alert(teste)
// var confirm = confirm('Tem certeza que deseja limpar os campos?')


function mudaCor() {
    const titulo = document.getElementById('titulo')

    titulo.style.color = 'red'
    titulo.style.fontSize = "50px"
}

function reset() {
    document.getElementsByClassName('campo').value = ''
}
//
// function addTexto() {
//     document.getElementById('titulo').innerHTML += ' Boa Tarde'
// }
//
// function resetCor() {
//     document.getElementById('titulo')
//
//     const titulo = document.getElementById('titulo')
//
//     titulo.style.color = '#212529'
//     titulo.style.fontSize = "40px"
// }
//
// function testeInput() {
//     const form = document.getElementById('formulario')
//
//     form.value = 'Tarde'
// }

function verificaConfirm(resultado) {
    if (resultado) {
        // document.getElementById('gridCheck').value = ''
        document.getElementById('inputZip').value = ''
        document.getElementById('inputCity').value = ''
        document.getElementById('inputAddress').value = ''
        document.getElementById('inputAddress2').value = ''
        document.getElementById('inputPassword4').value = ''
        document.getElementById('inputEmail4').value = ''
        document. getElementById("gridCheck").checked = false
        document.getElementById("inputState").selectedIndex = 0; //indice 0 = primeiro item
    }
}
function labelCor(label) {
    document.getElementById(label).style.color = 'red'
    // document.getElementById(label).style.color = 'white'
}
function labelCorOut(label){
    document.getElementById(label).style.color = 'white'
}
function popularInput(id, valor){
    document.getElementById(id).value = valor
}
// function teste(id){
//     const valorrr = document.getElementById(id).innerText
//     alert(valorrr)
// }