const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

// menu animation eka ayinkrnna
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

///

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()

loaderAnimation()


// Image Slider Functionality
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Deactivate all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show the selected slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // Update current slide index
        currentSlide = index;
    }

    // Function to show next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }

    // Function to show previous slide
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = slides.length - 1;
        }
        showSlide(prev);
    }

    // Set up event listeners for controls
    prevBtn.addEventListener('click', function () {
        prevSlide();
        resetInterval();
    });

    nextBtn.addEventListener('click', function () {
        nextSlide();
        resetInterval();
    });

    // Set up event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            showSlide(slideIndex);
            resetInterval();
        });
    });

    // Function to reset the automatic slide interval
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Function to start the automatic slide interval
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Initialize the slider
    showSlide(0);
    startInterval();
});