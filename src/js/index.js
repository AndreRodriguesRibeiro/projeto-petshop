

const menu = document.querySelector('.btn-nav')


function Alternarmenu(){
      const nav = document.getElementById('lista')
      nav.classList.toggle('open');
   }

menu.addEventListener('click',()=>{
      Alternarmenu();
})