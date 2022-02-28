"use strict";
import i18Obj from './lang.js';
let isLight;
function getLocalStorage() {
    isLight = localStorage.getItem('theme') === 'false' || localStorage.getItem('theme') === 'null' ? false : true;
    if (isLight) {
        changeIcon();
    }
    console.log(localStorage.getItem('theme'));
    // if(localStorage.getItem('them')) {
    //   const them = localStorage.getItem('them');
    //   getTranslate(them);
    // }
}
window.addEventListener('load', () => {
    if (getLocalStorage()) {

    }
})

const iconMenu = document.querySelector('.header-burger');
const menuBody = document.querySelector('.header__navigation-items');
const overlay = document.querySelector('.overlay');
const link = document.querySelectorAll('.header__navigation-link');

const button_black = document.querySelectorAll('.button-black');
const portfolioImages = document.querySelectorAll('.portfolio__section-imgs-item');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const portfolioButtonsList = document.querySelectorAll('.portfolio__section-buttons');

const langEl = document.querySelector('.header__navigation-lang');
const langLink = document.querySelectorAll('.header__navigation-lang-link');
const allLang = ['en', 'ru'];

// const iconSun = document.querySelector('.icon-sun');
// const iconMoon = document.querySelector('.icon-moon');
const buttonTheme = document.querySelector('.theme-buttons');

const themeElements = ['body', 'html', '.main', '.header__navigation-items', '.header-burger', '.section-title', '.header__navigation-link', '.header__container', '.button', '.contacts', '.theme-buttons'];


// iconSun.addEventListener('click', (event)=>{
//   console.log(event.target.dataset.theme);
//   changeIcon()
//   localStorage.setItem('them', event.target.dataset.theme);
// });

// iconMoon.addEventListener('click', (event)=>{
//   console.log(event.target.dataset.theme);
//   changeIcon()
//   localStorage.setItem('them', event.target.dataset.theme);
// });

buttonTheme.addEventListener('click', (event) => {
    isLight = !isLight;
    console.log(isLight);
    changeIcon();
})
// let startTheme = 'dark';
function changeIcon(event) {
    buttonTheme.classList.toggle('theme');
    // iconMoon.classList.toggle('theme');
    buttonTheme.classList.toggle('rotate');

    for (let i = 0; i < themeElements.length; i++) {
        let element = document.querySelector(themeElements[i]);
        element.classList.toggle('theme-light');


        // if event.target.classList.contains('.icon-sun') && !event.target.classList.contains('theme-light')
        // if event.target.classList.contains('.icon-moon') && !event.target.classList.contains('theme-light')
        // localStorage.setItem("them", "theme-light");
    }
}
function setLocalStorage() {

    localStorage.setItem('theme', isLight);
}
window.addEventListener('beforeunload', setLocalStorage)



portfolioButtonsList.forEach(elem => elem.addEventListener('click', changeImg));

iconMenu.addEventListener('click', closeMenu);
link.forEach(l => l.addEventListener('click', closeMenu));
overlay.addEventListener('click', closeMenu);


function closeMenu(event) {
    menuBody.classList.toggle('active');
    iconMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('lock');
}


function changeImg(event) {
    if (event.target.classList.contains('portfolio-btn')) {
        const season = event.target.dataset.season
        portfolioImages.forEach((img, index) => img.src = `./src/assets/img/${season}/${index + 1}.jpg`)
    }
}
// function toggleColor() {
//   document.getElementsByClassName("button-black").classList.remove("active"); 
//  }

portfolioButtonsList.forEach(elem => elem.addEventListener('click', (event) => {
    // Отлавливаем элемент в родители на который мы нажали
    let target = event.target;

    // Проверяем тот ли это элемент который нам нужен
    if (target.classList.contains('button-black')) {
        for (let i = 0; i < button_black.length; i++) {
            // Убираем у других
            button_black[i].classList.remove('active');
        }
        // Добавляем тому на который нажали
        target.classList.add('active');
    }

}));

// multilang -----------------------------

langLink.forEach(elem => elem.addEventListener('click', changeURLLanguage));

// langLink.forEach(elem => elem.addEventListener('click',() => {    
//   changeURLLanguage();
//   changeLanguage();    
// }));

// langLink.forEach(el => {
//   el.addEventListener('click', () => {
//     langEl.querySelector('.active').classList.remove('active');
//     el.classList.add('active');  
//   });
// });

// langLink.forEach(el => {
//     el.addEventListener('click', () => {
//       langEl.querySelector('.active').classList.remove('active');
//       el.classList.add('active');
//     });
//   });


// localStorage.setItem('active', 42);
// console.log(localStorage.getItem('active'));

// let langStorage = 'en';
// let themeStorage = 'dark';
// function setLocalStorage() {
//   localStorage.setItem('langStorage', langStorage);
//   localStorage.setItem('themeStorage', themeStorage);
// }
// window.addEventListener('beforeunload', setLocalStorage);
// function getLocalStorage() {
//   if(localStorage.getItem('langStorage')) {
//     const langStorage = localStorage.getItem('langStorage')
//     getTranslate(langStorage);
//   }
//   else if(localStorage.getItem('themeStorage')) {
//     const themeStorage = localStorage.getItem('themeStorage')
//     switchTheme(themeStorage);
//   }
// }
// window.addEventListener('load', getLocalStorage);
// });


// function setLocalStorage() {
//   localStorage.setItem('lang', lang);
// }
// window.addEventListener('beforeunload', setLocalStorage)

// const langEl = document.querySelector('.header__navigation-lang');
// const langLink = document.querySelectorAll('.header__navigation-lang-link');
// const allLang = ['en', 'ru'];

function changeURLLanguage(event) {
    console.log(event.target.dataset.lang);
    location.href = window.location.pathname + '#' + event.target.dataset.lang;
    location.reload();

};

window.onload = (event) => {
    var hash = window.location.hash.substr(1);
    document.querySelector('.header__navigation-lang a').classList.remove('active');
    document.querySelector('.' + hash).classList.add('active');
};

// window.onload = (event) => {
//   console.log('page is fully loaded');
//     // remove active class from both "ru" and "end elements
//     document.querySelector('.header__navigation-lang-link').classList.remove('active');
//     //Then get the "ru" or "en" from the URL hash (whichever one it is)
//     //Then add an active class to that element
//     let theHash = window.location.hash.substr(1);
//     console.log(theHash)
//     document.querySelector('.header__navigation-lang-link-ru').classList.add('active');

// };
// // remove active class from both "ru" and "end elements
// document.querySelector('header__navigation-lang-link').classList.remove('active');
// //Then get the "ru" or "en" from the URL hash (whichever one it is)
// //Then add an active class to that element
// let theHash = window.location.hash.substr(1);
// document.querySelector(theHash).classList.add('active)
// });

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    // если ошибка то устанавливаем по умолчанию en
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    // console.log(hash);
    document.querySelector('title').innerHTML = i18Obj[hash]['unit'];
    // document.querySelector('.language-hero-title').innerHTML = i18Obj[hash]['language-hero-title'];
    for (let key in i18Obj[hash]) {
        // let eleme = document.querySelector('.language-'+ key);
        // console.log(key);
        let eleme = document.querySelector(`.${key}`);
        // проверка получили ли элемент с правильным классом или нет, если всё ок то присваиваем перевод
        // console.log(eleme);
        if (eleme) {
            eleme.innerHTML = i18Obj[hash][key];
        }

    }
}
changeLanguage();

function preloadAllImages(seasons) {
    for (const season of seasons) {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./src/assets/img/${season}/${i}.jpg`;
        }
    }
}
preloadAllImages(seasons);

setTimeout(function () {
    document.body.style.display = 'block';
}, 200)

// custom-video 
// function playPause(btn,vid){
// 	var vid = document.getElementById(vid);
// 	if(vid.paused){
// 		vid.play();
// 		btn.innerHTML = "Pause";
// 	} else {
// 		vid.pause();
// 		btn.innerHTML = "Play";
// 	}
// }

// const videoSection = document.querySelector(".video__section-video");
// const videoContent = document.querySelector(".video__section-content");
// const playButtonBig = document.querySelector(".icon-play-btn");
// const controlPlay = document.querySelector(".play-icon");
// const controlVolume = document.querySelector(".volume-icon");
// const progressRange = document.querySelector(".progress");
// const volumeRange = document.querySelector(".volume");
// const controls = document.querySelector(".video__section-controls");


// playButtonBig.addEventListener("click", togglePlay);

// function togglePlay() {
//   const event = videoContent.paused ? "play" : "pause";
//   videoContent[event]();
//   if (event === "play") {
//     playButtonBig.classList.add("disappear");
//     controlPlay.classList.add("pause");
//     controls.classList.add("on");
//   } else {
//     playButtonBig.classList.remove("disappear");
//     controlPlay.classList.remove("pause");
//   }
// }
// b

// videoContent.addEventListener("click", togglePlay);
// controlPlay.addEventListener("click", togglePlay);

// let currentVolume = 0.4;

// function toggleMute() {
//   videoContent.volume = +videoContent.volume ? 0 : currentVolume;
//   controlVolume.classList.toggle("mute");
//   volumeRange.style.setProperty("--value", videoContent.volume * 100);
//   volumeRange.value = videoContent.volume * 100;
// }
// controlVolume.addEventListener("click", toggleMute);

// function volumeUp() {
//   currentVolume = this.value / 100;
//   videoContent.volume = currentVolume;
//   if (!currentVolume) controlVolume.classList.add("mute");
//   else controlVolume.classList.remove("mute");
//   handleProgress.call(this);
// }
// volumeRange.addEventListener("input", volumeUp);

// function videoUpdate() {
//   videoContent.currentTime = (this.value / 100) * videoContent.duration;
//   handleProgress.call(this);
// }

// function handleProgress() {
//   this.style.setProperty("--value", this.value);
// }

// function videoFlow() {
//   progressRange.value = (videoContent.currentTime / videoContent.duration) * 100;
//   handleProgress.call(progressRange);
// }

// progressRange.addEventListener("input", videoUpdate);
// videoContent.addEventListener("timeupdate", videoFlow);













// =======================

const videoPlayer = document.querySelector('.player');
const videoTrack = document.querySelector('.video__track');
const videoImg = document.querySelector('.video__img');
const playBtn = document.querySelector('.play__btn');
const controls = document.querySelector('.controls');
const playerBtn = document.querySelector('.play');
const volumeBtn = document.querySelector('.volume');
const progressVolume = document.querySelector('.volume__progress');
const progressVideo = document.querySelector('.video__progress');
const fullscreenBtn = document.querySelector('.fullscreen');

let isPlay = false;
let isFullscreen;

//PLAY VIDEO FUNCTIONS
function playVideo() {
    videoImg.style.display = 'none';
    if (!isPlay) {
        isPlay = true;
        playBtn.style.display = 'none';
        playerBtn.classList.add('pause');
        videoTrack.play();
        setInterval(() => {
            progressVideo.value = videoTrack.currentTime / videoTrack.duration * 100;
            progressVideo.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${progressVideo.value}%, #c8c8c8 ${progressVideo.value}%, #c8c8c8 100%)`;
        }, 10);
    } else {
        isPlay = false;
        playBtn.style.display = 'block';
        playerBtn.classList.remove('pause');
        videoTrack.pause();
    }
}

function setProgress() {
    videoTrack.currentTime = progressVideo.value * (videoTrack.duration / 100);
}

// FUNCTIONS CHANGE VOLUME
function setVolumeLevel() {
    videoTrack.volume = progressVolume.value / 100;
    let value = progressVolume.value;
    let level = progressVolume.value / 100;
    progressVolume.style.background = "linear-gradient(to right, #BDAE82 0%, #BDAE82 ".concat(value, "%, #C8C8C8 ").concat(value, "%, #C8C8C8");
    if (level === 0) {
        volumeBtn.classList.add('mute');
    } else {
        volumeBtn.classList.remove('mute');
    }
}
// MUTE
function toggleVolume() {
    if (videoTrack.volume == 0) {
        progressVolume.value = 50;
        videoTrack.volume = progressVolume.value / 100;
        volumeBtn.classList.remove('mute');
        setVolumeLevel();
    } else {
        videoTrack.volume = 0;
        progressVolume.value = 0;
        volumeBtn.classList.add('mute');
        setVolumeLevel();
    }
}


//FULLSCREEN FUNCTIONS
function toggleFullscreen() {
    if (!isFullscreen) {
        fullscreenBtn.style.backgroundImage = 'url(./assets/svg/fullscreen-exit.svg)';
        isFullscreen = true;
        videoPlayer.style.cursor = 'pointer';
        videoPlayer.requestFullscreen();
    } else {
        fullscreenBtn.style.backgroundImage = 'url(./assets/svg/fullscreen.svg)';
        videoPlayer.style.cursor = 'auto';
        isFullscreen = false;
        document.exitFullscreen();
    }
}


//EVENT LISTENERS PLAY
videoTrack.addEventListener('click', playVideo);
playBtn.addEventListener('click', playVideo);
playerBtn.addEventListener('click', playVideo);
videoTrack.addEventListener('ended', playVideo);

progressVideo.addEventListener('input', setProgress);

//EVENT LISTENERS VOLUME
volumeBtn.addEventListener('click', toggleVolume);
progressVolume.addEventListener("input", setVolumeLevel);

//EVENT LISTENERS FULLSCREEN
fullscreenBtn.addEventListener('click', toggleFullscreen);

//EVENT LISTENERS BUTTON KEYBOARD
document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        playVideo();
    }
    if (event.code === 'ArrowLeft') {
        videoTrack.currentTime -= 2;
    }
    if (event.code === 'ArrowRight') {
        videoTrack.currentTime += 2;
    }
    if (event.code === 'ArrowUp') {
        progressVolume.value = Number(progressVolume.value) + 1;
        setVolumeLevel();
    }
    if (event.code === 'ArrowDown') {
        progressVolume.value -= 1;
        setVolumeLevel();
    }
    if (event.code === 'KeyM') {
        toggleVolume();
    }
    if (event.code === 'KeyF') {
        toggleFullscreen();
    }
});



const allPageBtn = document.querySelectorAll('.btn');

allPageBtn.forEach(el => el.addEventListener('click', function (event) {
    const x = event.pageX;
    const y = event.pageY;

    const buttonTop = event.target.offsetTop;
    const buttonLeft = event.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
}));