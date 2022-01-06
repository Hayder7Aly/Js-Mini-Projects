const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);
function fixNav(){
    nav.classList.toggle('active' , window.scrollY > nav.offsetHeight)
} 