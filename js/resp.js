burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')

 

burger.addEventListener('click',()=>{
    navlist.classlist.toggle ('.v-class-resp');
    navbar.classlist.toggle('h-nav-resp'); 
})
