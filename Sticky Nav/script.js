const navElement = document.querySelector('nav');
const navbarLinks = navElement.querySelectorAll('a');

const navPosition = navElement.getBoundingClientRect().top

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    navElement.style.top = scrollPosition + 'px'

    navbarLinks.forEach(link => {
        const sectionElement = document.querySelector(link.hash)
        const offSet = 50
        if (scrollPosition + offSet> sectionElement.offsetTop && scrollPosition + offSet < sectionElement.offsetTop + sectionElement.offsetHeight) {
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }
    })
})