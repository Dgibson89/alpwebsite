document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('#imageCarousel').carousel({
    interval: 6000 
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default link behavior
            var destination = this.href;

            document.body.classList.add('fade-out');

            setTimeout(function () {
                window.location.href = destination;
            }, 1000); // This timeout duration should match the CSS transition time
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in');
});
