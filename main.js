const nav = document.querySelector('.nav')

const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year + ' Smakager'
}
handleCurrentYear()

function hideNav() {
	if (window.scrollY >= 50) {
		nav.classList.add('hide-nav')
	} else {
		nav.classList.remove('hide-nav')
	}
}
window.addEventListener('scroll', hideNav)
