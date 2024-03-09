/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 let typingEffect = new Typed(".typedText",{
    strings : ["Fresh Graduate","FE Developer","UI UX Design"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })

/* ----- CHANGE IMAGE HERO ----- */

var imageIndex = 1; 
var imagePaths = [
  "./assets/img/profile_2.png", 
  "./assets/img/profile_1.jpg", 
];

function changeImage() {
  document.getElementById("avatarImage").src = imagePaths[imageIndex];
  imageIndex = (imageIndex + 1) % imagePaths.length; 
}

setInterval(changeImage, 5000);

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})


/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

// Fungsi untuk membuka link di tab baru
function openLinkInNewTab(link) {
  window.open(link, '_blank');
}

  // Initialize Swiper
  var swiper;

  function initSwiper(slidesPerView) {
    swiper = new Swiper('.swiper', {
      slidesPerView: slidesPerView,
      spaceBetween: 20, // Jarak antar slide
      loop: true, // Enable looping
      autoplay: {
        delay: 5000, // 5 seconds
        disableOnInteraction: false, // Enable autoplay even if swiper is touched
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  initSwiper(3);

  // Tambahkan event listener untuk media query
  const mediaQuery = window.matchMedia('(max-width: 1080px)');

  function handleMediaQuery(e) {
    if (e.matches) {
      swiper.destroy();
      initSwiper('auto'); // Inisialisasi kembali dengan tampilan "auto" di bawah desktop
    } else {
      swiper.destroy();
      initSwiper(3); // Inisialisasi kembali dengan tampilan tiga slide di desktop
    }
  }

handleMediaQuery(mediaQuery);
mediaQuery.addListener(handleMediaQuery);
