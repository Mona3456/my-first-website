const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navlist = document.querySelector('.navlist');
const rightnav = document.querySelector('.rightnav');

burger.addEventListener('click', () => {
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});

function scrollToServices(event) {
    event.preventDefault();
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}