

const anchors = document.querySelectorAll('.button');

for(let anchor of anchors){
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      document.querySelector('.ordering__form').scrollIntoView({
         behavior:'smooth',
         block: 'center'
      })
      
   })
}





