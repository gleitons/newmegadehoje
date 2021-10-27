const btnMobileM = document.querySelector('button#botaoMobileP')
    

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}
btnMobileM.addEventListener('click', toggleMenu)

function voltar(){
    window.history.back()
}