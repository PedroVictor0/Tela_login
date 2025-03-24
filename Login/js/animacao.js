let btnEntrar = document.querySelector('#entrar');
let btnCadastro = document.querySelector('#cadastro');
let body = document.querySelector('body')

btnEntrar.addEventListener("click", function () {
    body.className = 'sign-in-js';
})

btnCadastro.addEventListener("click", function () {
    body.className = 'sign-up-js';
})
