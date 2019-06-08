let navbar = document.querySelector('.nav-menu');
let sticky = navbar.offsetTop;
console.log(sticky)

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
})