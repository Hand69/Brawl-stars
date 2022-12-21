//! slider
const prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add("active");
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function scrollto(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
} 

const buttom1 = document.querySelector('.buttom1')
const buttom1_1 = document.querySelector('#buttom1_1')

buttom1.addEventListener('click', () => {
    scrollto(buttom1_1);
})

const buttom2 = document.querySelector('.buttom2')
const buttom2_1 = document.querySelector('#buttom2_1')

buttom2.addEventListener('click', () => {
    scrollto(buttom2_1);
})

const buttom3 = document.querySelector('.buttom3')
const buttom3_1 = document.querySelector('#buttom3_1')

buttom3.addEventListener('click', () => {
    scrollto(buttom3_1);
})

const buttom4 = document.querySelector('.buttom4')
const buttom4_1 = document.querySelector('#buttom4_1')

buttom4.addEventListener('click', () => {
    scrollto(buttom4_1);
})


