
let init = () => {
    let container = document.getElementsByClassName('jumbo-slider__container')[0],
    slides = document.getElementsByClassName('jumbo-slider__slide'),
    circles = document.getElementsByClassName('jumbo-slider__circle'),
    links = document.getElementsByClassName('jumbo-slider__link'),
    current = 1,
    time = 6000;

    // code below, adds a class, that activates the beginning animation.
    slides[0].classList.add('jumbo-slider__slide--active','jumbo-slider__video-player--active');
    links[current - 1].classList.add('jumbo-slider__link--active');
    circles[current - 1].classList.add('jumbo-slider__circle--filled');

    // update ellipsis and links
    let updateNav = (current) => {
        console.log(`update current: ${current}`);
        for(let index = 0; index < slides.length; index++) {
            links[index].classList.remove('jumbo-slider__link--active');
            circles[index].classList.remove('jumbo-slider__circle--filled');
        }
        links[current - 1].classList.add('jumbo-slider__link--active');
        circles[current - 1].classList.add('jumbo-slider__circle--filled');
    }

    // setInterval will keep running
    let startSlide = () => {
        setInterval(() => {
            
            slides[1].classList.add('jumbo-slider__slide--active');
            slides[0].classList.remove('jumbo-slider__slide--active');

            // makes a copy of the first slide and puts appends it to the bottom
            container.appendChild(slides[0].cloneNode([true]));
            // code below gets rid of first slide
            container.removeChild(slides[0]);

            if(current < slides.length) {
                current++;
                updateNav(current);
            }
            // return back to 1 once code above becomes false
            else {
                current = 1;
                updateNav(current);

            }
        },time)
    }
    startSlide();

    
}
init();