$(document).ready(function(){ 
$('.slider').slick(
    {
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        prevArrow:'<i class="icon-chevron-left left-arrow"></i>',
        nextArrow:'<i class="icon-chevron-right right-arrow"></i>',

    }
);
//Contador del Slider- Card
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
});
