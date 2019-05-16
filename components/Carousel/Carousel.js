const carousel = document.querySelector('.carousel');

const carouselData = [
    {
        Title: "Reach Out",
        Subtitle: "Aim for the stars, at least you'll land on the clouds",
        Image: "../../img/image1.jpg",
    },
    {
        Title: "Reach Out",
        Subtitle: "Aim for the stars, at least you'll land on the clouds",
        Image: "../../img/image1.jpg",
    }
]

class Carousel {
    constructor(carousel, carouselData) {
        this.carousel = carousel;
        this.carouselData = carouselData;
        console.log(this.carousel);
        console.log(this.carouselData);

        this.wrapper = this.constructWrapper();
        console.log(this.carousel);
        console.log(this.wrapper);
        this.constructImages();
    }

    constructWrapper() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('carousel-wrapper');
        wrapper.setAttribute('style', 'height: 100px; width: 100px;');
        this.carousel.appendChild(wrapper);
        return wrapper;
    }

    constructImages() {
        
        let image1 = document.createElement('img');
        image1.classList.add('carousel_photo');
        image1.src = this.carouselData[0].Image;
        this.wrapper.appendChild(image1);
    }
}

new Carousel(carousel, carouselData);