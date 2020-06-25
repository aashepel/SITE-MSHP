window.onload = function () {
    let links = document.getElementsByClassName('link-of-menu');
    let max_width_link = 0;
    for (let i = 0; i < links.length; i++){
        if (links[i].getBoundingClientRect().width > max_width_link){
            max_width_link = links[i].getBoundingClientRect().width;
        }
    }
    max_width_link += "px";
    for (let i = 0; i < links.length; i++){
        links[i].style.width = max_width_link;
    }
    let element_active_link = document.getElementById('active');
    document.getElementsByTagName('h1')[0].textContent = element_active_link.textContent;
    document.getElementsByTagName("title")[0].textContent = element_active_link.textContent;
    if (document.getElementById('brief-information')) {
        showSlides(1, document.getElementById('brief-information'));
        showSlides(1, document.getElementById('popular-cars'));
        showSlides(1, document.getElementById('last-cars'))
        let images = document.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images[i].alt = "Ошибка загрузки изображения";
        }
    }
    // console.log('100');
    let element_li = document.getElementsByTagName('li');
    // console.log(element_li.length);
    for (let i = 0; i < element_li.length; i++){
        element_li[i].addEventListener("click", () => {
           if (document.getElementById('mobile-menu').style.display == "inline-block"){
               open_mobile_menu();
           }
        });
    }

}

let slideIndex = 1;

// Next/previous controls
function plusSlides(n, MainEl) {
    // console.log(MainEl);
    showSlides(slideIndex += n, MainEl);
}

function showSlides(n, MainEl) {
    // console.log(MainEl);
    let slides = MainEl.getElementsByClassName('mySlides');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function getId(element) {
    console.log(element);
}

function showGallery(element) {
    console.log(element);
    if (element.style.display != "inline-block"){
        element.style.display = "inline-block";
        element.previousElementSibling.textContent = "Скрыть фото";
    } else {
        element.previousElementSibling.textContent = "Показать фото";
        element.style.display = "none";
    }

}

function open_mobile_menu() {
    if (document.getElementById('mobile-menu').style.display != 'inline-block') {
        document.getElementById('mobile-menu').style.display = "inline-block";
        document.getElementById('btn-open-menu-on-mobile-outside').style.display = "none";
        document.body.style.overflow = "hidden";
    } else {
        document.getElementById('mobile-menu').style.display = "none";
        document.getElementById('btn-open-menu-on-mobile-outside').style.display = "block";
        document.body.style.overflow = "visible";
    }
}