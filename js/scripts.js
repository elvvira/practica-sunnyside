const toggleMenuElement = document.getElementById ('toggle-menu');
const MenuElement = document.getElementById('menu');

toggleMenuElement.addEventListener('click', ()=>{
    MenuElement.classList.toggle('menu--show');
})

window.scroll(0, '10000px')
