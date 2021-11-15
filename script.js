// NAVBAR

const navbar = document.querySelector('.nav')
let scrolled = false;

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
};

// SMOOTH SCROLLING
$('#navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 75,
            },
            800
        );
    }
});

// SLIDER

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// MENU

const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    nav.classList.toggle('add');
    burger.classList.toggle('fa-times')
});

// SHOW MORE PROJECTS BUTTON

const showMore = document.querySelector('.show');
const hidden = document.querySelectorAll('.hidden');
const oneHidden = document.querySelector('.hidden');

showMore.addEventListener('click', () => {
    hidden.forEach(pro => {
        pro.classList.toggle('unhidden');
    })
    if (oneHidden.classList.contains('unhidden')) {
        showMore.innerHTML = 'Show Less...'
    } else {
        showMore.innerHTML = 'Show More...'
    }
});