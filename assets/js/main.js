// ============================================================================ //
// AOS 
// ======================================================================== //
AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// ======================================================================== //
// CLOSE NAVBAR
// ======================================================================== //
        document.querySelectorAll('#mainNav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const toggler = document.querySelector('.navbar-toggler');
                if (toggler.offsetParent !== null) {
                    const bsCollapse = new bootstrap.Collapse(
                        document.getElementById('mainNav'),
                        { toggle: false }
                    );
                    bsCollapse.hide();
                }
            });
        });

// ======================================================================== //
// TYPING ANIMATION
// ======================================================================== //
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const texts = [
        "cpns",
        "pppk",
        "kedinasan"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 100;
    const pauseBetweenTexts = 2000;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            // Menghapus teks
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Mengetik teks
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Jeda setelah selesai mengetik
            isDeleting = true;
            setTimeout(type, pauseBetweenTexts);
        } else if (isDeleting && charIndex === 0) {
            // Pindah ke teks berikutnya setelah menghapus
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        } else {
            // Lanjutkan mengetik/menghapus
            const speed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(type, speed);
        }
    }

    // Mulai animasi
    setTimeout(type, 1000);
});

// ============================================================================ //
// SCROLL UP BUTTON
// ============================================================================ //
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Tampilkan tombol ketika pengguna scroll ke bawah 300px
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll ke atas ketika tombol diklik
    scrollToTopBtn.addEventListener('click', function () {
        // Untuk browser modern
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Untuk browser lama (fallback)
        if (!('scrollBehavior' in document.documentElement.style)) {
            const scrollStep = -window.scrollY / (500 / 15);
            const scrollInterval = setInterval(function () {
                if (window.scrollY !== 0) {
                    window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15);
        }
    })
<<<<<<< HEAD
});
=======
})

// ========================================================================= //
//  PORTFOLIO ISOTOPE AND FILTER
// ========================================================================= //
// $(window).load(function(){

//   var portfolioIsotope = $('.portfolio-container').isotope({
//     itemSelector: '.portfolio-thumbnail',
//     layoutMode: 'fitRows'
//   });

//   $('#portfolio-flters li').on( 'click', function() {
//     $("#portfolio-flters li").removeClass('filter-active');
//     $(this).addClass('filter-active');

//     portfolioIsotope.isotope({ filter: $(this).data('filter') });
//   })
// })
>>>>>>> 427dc8b4d00618eafa5085efbf8a99c227605572

// ===========================================================================
// WA FLOATING BUTTON
// ==========================================================================
document.addEventListener('DOMContentLoaded', function () {
    // You can add additional functionality here if needed
    // For example, track clicks on the WhatsApp button
    const whatsappButton = document.querySelector('.whatsapp-button');

    if (whatsappButton) {
        whatsappButton.addEventListener('click', function () {
            // You can add analytics tracking here
            console.log('WhatsApp button clicked');

            // Or send an event to Google Analytics
            // gtag('event', 'click', {'event_category': 'WhatsApp', 'event_label': 'Floating Button'});
        })
    }

    // Optional: Hide button when printing
    window.addEventListener('beforeprint', function () {
        document.querySelector('.floating-whatsapp').style.display = 'none';
    });
<<<<<<< HEAD

    window.addEventListener('afterprint', function () {
        document.querySelector('.floating-whatsapp').style.display = 'block';
    })
});

// ===========================================================================
// FAQ / YANG SERING DITANYAKAN
// ==========================================================================
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

=======
    
    window.addEventListener('afterprint', function() {
        document.querySelector('.floating-whatsapp').style.display = 'block'; 
    })
}) 

// ===========================================================================
// FAQ ACCORDION / YANG SERING DITANYAKAN
// ==========================================================================
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
>>>>>>> 427dc8b4d00618eafa5085efbf8a99c227605572
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
<<<<<<< HEAD

=======
            
>>>>>>> 427dc8b4d00618eafa5085efbf8a99c227605572
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});