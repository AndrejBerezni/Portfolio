const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
        
    })
})
const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showImg');
        }
        
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenImage = document.querySelectorAll('.hiddenImg')

hiddenElements.forEach((el) => observer.observe(el));
hiddenImage.forEach((el) => imgObserver.observe(el));