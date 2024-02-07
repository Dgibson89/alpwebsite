document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchors not related to the carousel controls
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Check if the anchor is not a carousel control
        if (!anchor.classList.contains('carousel-control-prev') && !anchor.classList.contains('carousel-control-next')) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });

    // Initialize the carousel with an interval
    $('#imageCarousel').carousel({
        interval: 6000 
    });

    // Fade-in effect for the body
    document.body.classList.add('fade-in');

    // Prevent default action for carousel controls and manage carousel direction manually
    var carouselControls = document.querySelectorAll('#imageCarousel .carousel-control-prev, #imageCarousel .carousel-control-next');
    carouselControls.forEach(function(control) {
        control.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor action
            var slideTo = this.getAttribute('data-slide');

            // Programmatically trigger the carousel to slide to prev/next
            if (slideTo === 'prev') {
                $('#imageCarousel').carousel('prev');
            } else if (slideTo === 'next') {
                $('#imageCarousel').carousel('next');
            }
        });
    });
});
