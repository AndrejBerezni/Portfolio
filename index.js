// Scroll Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');}
         else {
            entry.target.classList.remove('show')
        } 
        
    })
})
// const imgObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('showImg');
//         }
        
//     })
// })

const hiddenElements = document.querySelectorAll('.hidden');
// const hiddenImage = document.querySelectorAll('.hiddenImg');

hiddenElements.forEach((el) => observer.observe(el));
// hiddenImage.forEach((el) => imgObserver.observe(el));

//Navbar

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active')
    navMenu.classList.toggle('is-active')
})

const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    slideToClickedSlide: true,
    observer: true,
    observeParents: true,
    loop: false
  });

