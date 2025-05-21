const burgerMenu = document.querySelector('.burger-menu');
const mobileNavigation = document.querySelector('.mobile-navigation');

if (burgerMenu) 
    {
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
        mobileNavigation.style.display = mobileNavigation.style.display === 'flex' ? 'none' : 'flex';
    });
}