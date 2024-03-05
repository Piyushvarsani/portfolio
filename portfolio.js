const navLinks = document.querySelectorAll("nav a")
navLinks.forEach((a) => {
    a.addEventListener('mouseenter', function () {
        a.classList.add('nav-link')
    })
})
navLinks.forEach((a) => {
    a.addEventListener('mouseleave', function () {
        a.classList.remove('nav-link')
    })
})
