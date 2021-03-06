$(document).ready(function(){ 
    //contador del Slider
    count();
    //Desactivar el arrow cuando no se utilice
    disable ();

     //Metodo para validar texto
     jQuery.validator.addMethod("accept", function (value, element, param) {
        return value.match(new RegExp("." + param + "$"));
    }); 
    //metodo para validar a mayor de edad
 
     /*    jQuery.validator.addMethod("greaterThan", 
        function(value, element, params) {

            if (!/Invalid|NaN/.test(new Date(value))) {
                return new Date(value) > new Date($('#date').val());
            }

            return isNaN(value) && isNaN($(params).val()) 
                || (Number(value) > Number($(params).val())); 
        },
        ); */
       /*  $.validator.addMethod(
            "date1",
            function ( value, element ) {
                var birthdate = new Date($("#year").val()); // Se Procede a calcular en base a la fecha
                var nowyear = now.getFullYear();
                if ( ! bits )
                    return this.optional(element) || false;
                str = bits[ 1 ] + '/' + bits[ 0 ] + '/' + bits[ 2 ];
                return this.optional(element) || !/Invalid|NaN/.test(new Date( str ));
            },
            "Please enter a date in the format dd/mm/yyyy"
        ); */
    $("#form-validation").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 30,
                number: false,
                accept: "[a-zA-Z]+"
            },
            lastName: {
                required: true,
                minlength: 3,
                maxlength: 30,
                number: false,
                accept: "[a-zA-Z]+"
            },
            identification: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10,
            },
            cell: {
                required: true,
                number: true,
                min: 10,
                max: 10,
            },
            mail: {
                required: true,
                email: true,
            },
            province: {
                required: true,
            },
            gender: {
                required: true,
            },
            day: {
                required: true,
                number: true,
                range: [1,31]
            },
            month: {
                required: true,
                number: true
            },
            year: {
                required: true,
                number: true,
                range: [1900,2002]
            }
        },
        messages: {
            name: {
                required: "Este campo es obligatorio.",
                minlength: "Por favor, no escribas menos de 3 caracteres.",
                maxlength: "Por favor, no escribas m??s de 30 caracteres.",
                accept: "Solo puede ingresar letras "
            },
            lastName: {
                required: "Este campo es obligatorio.",
                minlength: "Por favor, no escribas menos de 3 caracteres.",
                maxlength: "Por favor, no escribas m??s de 30 caracteres.",
                accept: "Solo puede ingresar letras "
            },
            identification: {
                required: "Este campo es obligatorio.",
                number: "Por favor, escribe un n??mero entero v??lido.",
                minlength: "Por favor, no escribas menos de 10 n??meros.",
            },
            cell: {
                required: "Este campo es obligatorio.",
                number: "Por favor, escribe un n??mero entero v??lido.",
                minlength: "Por favor, no escribas menos de 10 n??meros.",
            },
            mail: {
                required: "Este campo es obligatorio.",
                email: "Por favor, escribe una direcci??n de correo v??lida",
            },
            province: {
                required: "Este campo es obligatorio.",
            },
            gender: {
                required: "Este campo es obligatorio.",
            },
            day: {
                required: "Este campo es obligatorio.",
                number: "Por favor, escribe un n??mero entero v??lido.",
                range: "Escriba un d??a correcto",
            },
            month: {
                required: "Este campo es obligatorio.",
            },
            year: {
                required: "Este campo es obligatorio.",
                range: "Edad fuera de rango, tiene que ser mayor de edad",
                number: "Por favor, escribe un n??mero entero v??lido.",
                greaterThan:"Must be greater than {0}."
                
            },
            politica: {
                required: "Debes aceptar t??rminos y condiciones",
            }
        }

    });
    $("#enviar").click(function () {
        if ($("#form-validation").valid() == false) {
            return
        }
        let name = $("#name").val()
        let lastName = $("#lastName").val()
        let identification = $("#identification").val()
        let cell = $("#cell").val()
        let mail = $("#mail").val()
        let province = $("#province").val()
        let gender = $("#gender").val()
        let politica = $("#politica").is(":checked")
    });
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
