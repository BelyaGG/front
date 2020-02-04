import { SLIDER_ARRAY } from '../sliderArray.js';
import { showFirstSlider } from '../utils/showFirstSlide.js';

const ROOT = document.getElementById('root');

export const createSliderDOM = () => {
    const sectionSlider = document.createElement('section');
    sectionSlider.className = 'section-slider-top';
    ROOT.appendChild(sectionSlider);
    mapArray();
    showFirstSlider();
    showNextSlide();
}


const createSlider = ({ img , title , des }, index ) => {
    const sectionSlider1 = document.querySelector('.section-slider-top')
    const sectionInner = document.createElement('div');
    sectionInner.className = 'section-inner';
    sectionInner.style.display = 'none';
    sectionInner.dataset.sliderName = index + 1;
    sectionInner.innerHTML = `
            <div class="section-slider-top-wraper"> 
                <div class="section-slider-top-img">
                    <img src="${img}" alt="">
                </div>
                <div class="section-slider-top-titles">
                    <div class="section-slider-top-titles-title">${title}</div>
                    <div class="section-slider-top-titles-des">${des}</div>
                    <div class="section-slider-top-titles-button"> 
                    <button>SHOP NOW</button>
                    </div>
                </div>
            <div>
    `;



    // const sliderEllipse = document.createElement('div');
    // sliderEllipse.className = 'section-slider-top-ellipse';
    // sliderEllipse.innerHTML = `
    //     <img src="https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse1.png" alt="">
    //     <img src="https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse1.png" alt="">
    //     <img src="https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse1.png" alt="">
    //     <img src="https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse1.png" alt="">
    //     <img src="https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse1.png" alt="">
    // `;

    sectionSlider1.appendChild(sectionInner);
    // sectionSlider1.appendChild(sliderEllipse);
}

const mapArray = () => {
    SLIDER_ARRAY.map(createSlider);
}


const showNextSlide = () => { 
        let index = 1;
        setInterval(function nextSl() {
            if(index < SLIDER_ARRAY.length){
                document.querySelector(`.section-inner[data-slider-name='${index}']`).style.display = 'none';
                index++;
                document.querySelector(`.section-inner[data-slider-name='${index}']`).style.display = 'block';
            } else {
                document.querySelector(`.section-inner[data-slider-name='${index}']`).style.display = 'none';
                index = 1;
                document.querySelector(`.section-inner[data-slider-name='${index}']`).style.display = 'block';
            }
        }, 3000);
}
