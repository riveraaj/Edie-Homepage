window.addEventListener('DOMContentLoaded', () => {
    OpenMobileMenu();
})

function OpenMobileMenu(){
    const btnMenu = document.querySelector('.mobile-menu'),
            menuContainer = document.querySelector('.principal-nav__link');

    document.addEventListener('click', e => {
        if(e.target === btnMenu){
            (btnMenu.classList.contains('isOpen')) ? closeMenu(btnMenu, menuContainer) : openMenu (btnMenu, menuContainer);
        }
    })
}

const openMenu = (btnMenu, menuContainer) => {
    btnMenu.classList.add('isOpen');
    btnMenu.textContent = 'close';
    menuContainer.style.display = 'flex';
}

const closeMenu = (btnMenu, menuContainer) => {
    btnMenu.classList.remove('isOpen');
    btnMenu.textContent = 'menu';
    menuContainer.style.display = 'none';
}