document.addEventListener ('DOMContentLoaded', () => {
    const elementoscarrousel = document.querySelectorAll('.carrousel');
    M.carrousel.init(elementoscarrousel, {
        duration: 150
    });
});