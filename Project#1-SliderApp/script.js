// car data
var models = [
    {
        name: "BMV 418d",
        image: "img/bmw.jpg",
        link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe"
    },
    {
        name: "Mazda CX-3",
        image: "img/mazda.jpg",
        link: "http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion"
    },
    {
        name: "Volvo S60",
        image: "img/volvo.jpg",
        link: "http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance"
    },
    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name: 'Honda Civic',
        image: 'img/honda.jpg',
        link: 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];


var index = 0;
var slaytCount = models.length;

// showing car slide
function showSlide(index) {
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute('src', models[index].image)
    document.querySelector(".card-link").setAttribute('href', models[index].link)
}

// when left arrow clicked ...
document.querySelector(".fa-circle-arrow-left").addEventListener('click', function () {
    index--;
    if (index < 0) {
        index = slaytCount-1;
        showSlide(index);
    }
    else{
        showSlide(index);
    }
    console.log(index);
});

// when right arrow clicked ...
document.querySelector(".fa-circle-arrow-right").addEventListener('click', function () {
    index++;
    if (index > slaytCount-1) {
        index = 0;
        showSlide(index);
    }
    else{
        showSlide(index);
    }
    console.log(index);
});