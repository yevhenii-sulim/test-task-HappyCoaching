const buttonMenu = document.querySelector('.nav-button')
const navMenu = document.querySelector('.nav-menu')
const backdrop = document.querySelector('.backdrop')
buttonMenu.addEventListener('click', toggleMenu)
function toggleMenu (){
	const buttonMenuTitle = document.querySelectorAll('.button-menu')
	for(const span of buttonMenuTitle){
		span.classList.toggle('hidden')
	}
	navMenu.classList.toggle('hidden')
	backdrop.classList.toggle('hidden')
}

const questionList = document.querySelector(".question-list")
questionList.addEventListener('click', toggleQuestionText)

function toggleQuestionText(evt){
	const question = evt.target.closest('li');
	const questionSignOpenClose = question.querySelector('.open-close');
	const textQuestion = question.querySelector(".text-question")
	console.log( questionSignOpenClose)
	if(textQuestion.classList.contains("hidden")){
		console.log('open')
		textQuestion.classList.remove('hidden');
		questionSignOpenClose.style = `background-position: -11px -98px`
	} else {
		console.log('close')
		textQuestion.classList.add('hidden');
		questionSignOpenClose.style = `background-position: -55px -96px`
	}
}