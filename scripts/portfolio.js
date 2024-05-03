// Slider portfolio
// нажатие на картинку
const sliderPortfolio = document.querySelector('.slider-portfolio');
const srcEnCoursSlider = document.querySelector('.img-visible-slider');
const allPicsPortfolio = Array.from(document.querySelectorAll('.grid-item img'));
// кнопка вправо
const rightPortfolio = document.querySelector('.btn-right');
// кнопка влево
const leftPortfolio = document.querySelector('.btn-left');
// крестик
const fermerSlide = document.querySelector('.btn-fermer-slider');

let photoEnCours;
let indexEnCours;

allPicsPortfolio.forEach(item => {
    item.addEventListener('click', (e) => {

        sliderPortfolio.style.display = "block";
        srcEnCoursSlider.src = e.target.src;
        photoEnCours = e.target;
        indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
        //console.log(indexEnCours);
    })
})
// кнопка вправо
rightPortfolio.addEventListener('click', () => {

    if(indexEnCours === 20) {
        indexEnCours = 0;
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
        photoEnCours = allPicsPortfolio[indexEnCours];
        console.log(indexEnCours);
        return;
    }

    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours + 1].src;
    photoEnCours = allPicsPortfolio[indexEnCours + 1];
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEnCours);
})

// кнопка влево
leftPortfolio.addEventListener('click', () => {

    if(indexEnCours === 0) {
        indexEnCours = 20;
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
        photoEnCours = allPicsPortfolio[indexEnCours];
        console.log(indexEnCours);
        return;
    }

    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours - 1].src;
    photoEnCours = allPicsPortfolio[indexEnCours - 1];
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEnCours);
})
// крестик 
fermerSlide.addEventListener('click',() => {
    sliderPortfolio.style.display = "none";
})