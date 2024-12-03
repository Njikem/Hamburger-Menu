let navMenu = document.querySelector('.nav-menu');
let navToggle = document.querySelector('.nav-toggle');
let navList = document.querySelector('ul');

navToggle.addEventListener('click', function(){
    navList.classList.toggle('active');
    navToggle.classList.toggle('active');
})