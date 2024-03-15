const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')
console.log(btnOpen)

btnOpen.onclick = function () {
  //navMenu.classList.add('show--menu')
  navMenu.classList.toggle('show--menu')
}

btnClose.onclick = function () {
  navMenu.classList.remove('show--menu')
}


// Metodo para manejar eventos
// addEventListener
//querySelectorAll
const links = document.querySelectorAll('.nav__link')
console.log(links)

for (const link of links) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('show--menu')
  })
}

/* Usando la libreria typing.js */
var typed = new Typed('#typing', {
  strings: ['Fronted', 'Backend', 'FullStack'],
  typeSpeed: 150,
  loop: true,
  cursorChar: ' __'
})