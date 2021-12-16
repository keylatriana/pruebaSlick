$(document).ready(function(){ 
    //contador del Slider
    count();
    //Desactivar el arrow cuando no se utilice
    disable ();
});
$('.slider').slick(
    {
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        prevArrow:'<i class="icon-chevron-left left1-arrow"></i>',
        nextArrow:'<i class="icon-chevron-right right1-arrow"></i>',

    }
);
//Contador del Slider- Card
function count() {
var $slider = $('.card-slider');

    if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider-card__counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + '/' +slidesCount)
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });
    $slider.slick(
        {
            dots:true,
            infinite:false,
            prevArrow:'<i class="icon-chevron-left left-arrow"></i>',
            nextArrow:'<i class="icon-chevron-right right-arrow"></i>',
        }
    );
    }
}
function disable (){
    var $slider2 = $('.card-slider');
    $('.left-arrow').hide();
    $slider2.on('afterChange', function(event, slick, currentSlide) {  	
    console.log(currentSlide);
      if (currentSlide === 0) {
        $('.left-arrow').hide();
        $('.right-arrow').show();
      }
      else {
          $('.left-arrow').show();
      }
      if (slick.slideCount === currentSlide + 1) {
          $('.right-arrow').hide();
      }
    });
}
