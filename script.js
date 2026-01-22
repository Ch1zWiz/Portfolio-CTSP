document.addEventListener("DOMContentLoaded", () => {
    const scrollSections = document.querySelectorAll('.scroll-section');

    const options = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    scrollSections.forEach(section => {
        appearOnScroll.observe(section);
    });
});