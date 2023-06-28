const john = document.querySelector('.john')
const tanya = document.querySelector('.tanya')
const prevBtn = document.querySelectorAll('.prev_button')
const nextBtn = document.querySelectorAll('.next_button')

john.classList.add('hide')

function changeSlide() {
    const johnHide = john.classList.contains('hide')
    
    if(johnHide){
        john.classList.remove('hide')
        tanya.classList.add('hide')
    }else {
        tanya.classList.remove('hide')
        john.classList.add('hide')
    }
}

prevBtn.forEach(item => item.addEventListener('click', changeSlide))
nextBtn.forEach(item => item.addEventListener('click', changeSlide))