
//zdjecie contact
if (document.querySelector(".contact__photo-img") != null){
    setTimeout(function() {
        document.querySelector(".contact__photo-img").style.opacity = "1";
    }, 3000);
}


//text contact
if (document.querySelector('.contact__content') != null){
    setTimeout(function(){
        document.querySelector('.contact__content').style.opacity = '1';
    },500)
}



//zdjecia portfolio
const portfolioItems = [...document.querySelectorAll(".portfolio__item")];

portfolioItems.forEach(item => {
    setTimeout(function(){
        item.style.opacity = '1'
    },Math.floor(Math.random()*2000))
});

//zdjecia galeria
const galleryItems = [...document.querySelectorAll('.gallery__img')]

galleryItems.forEach(item => {
    setTimeout(function(){
        item.style.opacity = '1'
    },Math.floor(Math.random()*2000))
})

// podmiana nav logo


let windowWidth = window.innerWidth;
if (windowWidth <= 600){
    document.getElementById("img").src ="img/logo-small.png";
}

window.onresize = function(){
    let windowWidth = window.innerWidth;

    if (windowWidth <= 600){
        document.getElementById("img").src ="img/logo-small.png";
        }else{
            document.getElementById("img").src ="img/logo.png";
        }
    }

    

