const titulo = document.getElementById("titulo")
const listaNaoOrdenada = document.querySelector("ul")
const link = document.querySelector("a")
const listaOrdenada = document.getElementById("lista-ordenada")
 
titulo.innerText = "Bem-vindo ao meu projeto!"
link.innerText = "Visite o site ProZ Educação"
 
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`
 
listaOrdenada.innerHTML = `
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
    <li><a href="https://github.com" target="_blank">GitHub</a></li>
`