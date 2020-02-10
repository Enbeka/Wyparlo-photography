
//zdjecie contact
setTimeout(function() {
	document.querySelector(".contact__photo-img").style.opacity = "1";
}, 3000);

//text contact
setTimeout(function(){
    document.querySelector('.contact__content').style.opacity = '1';
},500)



//zdjecia portfolio
const portfolioItems = [...document.querySelectorAll(".portfolio__item")];

portfolioItems.forEach(item => {
    setTimeout(function(){
        item.style.opacity = '1'
    },700)
});

//zdjecia galeria
const galleryItems = [...document.querySelectorAll('.gallery__img')]

galleryItems.forEach(item => {
    setTimeout(function(){
        item.style.opacity = '1'
    },700)
})