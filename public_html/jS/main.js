$(document).ready(function () {

//counterUp    
    $(function () {
        $('.count-num').rCounter({
            duration: 25
        });
    });

//carousel slider
if($('.team-slider').length > 0){
    $('.team-slider').owlCarousel({
    items: 4,
    margin: 10,
    loop: true, //nema kraj nego vrtis u krug
    stagePadding: 30, //korisna opcija jer sada ukoliko nemamo strelice dajemo do znanja korisniku da moze da skroluje jer ce prva slika biti pomerena za 50px u neku stranu i onda ce biti jasno da moze da se pomera sadrzaj
    nav: false,
    //navText: ['<span class="fa-solid fa-arrow-left"></span>','<span class="fa-solid fa-arrow-right"></span>'],  //nece iz nekog razloga  
    slideBy: 1, //pomera za 3 slajda
    dots: false,//tackice ispod    
    autoplay: true, //sami se menjaju na odredjeni vrem. period    
    autoplayTimeout: 1200, //na 2s 
    autoplayHoverPause: true,//koristan kad hoverujemo element onda nece raditi autoplay
    responsive: {//veoma koristan feature u zavisnosti od dimenzija ekrana menjamo izgled carousel-a
        0: {//od 0 do 400
            items: 1,
            slideBy: 1,
            margin: 0
        },
        400: {//od 400 do 700
            items: 2,
            slideBy: 1,
            margin: 10
        },
        700: {
            items: 3,
            nav: false,
            slideBy: 1,
            margin: 10
        },
        1100: {
            items: 4,
            nav: false,
            slideBy: 1,
            margin: 10
        }
    }
        
        });
    
};
//show/hide text below img
    $('.product-hide-text').hide();
    $('.product-item').hover(function () {
        $(this).find('.product-hide-text').toggle();
    });

//validator
if($('.contact-form').length > 0){
    $('.contact-form').validate({
        highlight: function(element){
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function(element){
            $(element).addClass('is-valid').removeClass('is-invalid');
        },
        rules: {
            name:{
                required:true,
                minlength: 3
            },
            email:{
                required:true,
                email:true
            },
            message: {
                required:true,
                minlength: 10
            }
        },
        messages:{
            name:{
                required:'The Name field is required',
                minlenght:'The name field should bi min 3 character long'
            },
            email:{
                required:'The email field is required',
                minlenght:'The email field should bi min 3 character long'
            },
            message:{
                required:'The message field is required',
                minlenght:'The mesage field should bi min 10 character long'
            }
        },
        errorElement: 'p',
        errorPlacement: function(error, element){
            error.appendTo(element.closest('.form-group').find('.error-msg'));
        }
        
    });
    
}




});


