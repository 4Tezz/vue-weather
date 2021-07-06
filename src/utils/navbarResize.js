window.addEventListener('resize', () => {
    const navbarSearch = document.querySelector('.navbar-search')
    const navbar = document.querySelector('.navbar').querySelector('.container-xl')
    const navbarCollase = document.querySelector('.navbar-collapse')
    if(window.innerWidth >= 992) {
        navbar.appendChild(navbarSearch)
    } else {
        navbar.appendChild(navbarCollase)
    }
})