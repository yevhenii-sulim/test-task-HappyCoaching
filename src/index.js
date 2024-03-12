const buttonMenu = document.querySelector('.nav-button')
const navMenu = document.querySelector('.nav-menu')
const backdrop = document.querySelector('.backdrop')
console.log(backdrop,navMenu)
buttonMenu.addEventListener('click', toggleMenu)
function toggleMenu (){
	const buttonMenuTitle = document.querySelectorAll('.button-menu')
	for(const span of buttonMenuTitle){
		span.classList.toggle('hidden')
	}
	navMenu.classList.toggle('hidden')
	backdrop.classList.toggle('hidden')
}