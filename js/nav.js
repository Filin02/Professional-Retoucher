const menuAnchors = document.querySelectorAll('moble-nav__list[href*="#"]')

for (let menuAnchor of menuAnchors) {
   menuAnchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = menuAnchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}