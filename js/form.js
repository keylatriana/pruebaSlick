$(document).ready(function () {

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
                range: [1900,2002],
                range2: [1,1899]
            }
        },
        messages: {
            name: {
                required: "Este campo es obligatorio.",
                minlength: "Por favor, no escribas menos de 3 caracteres.",
                maxlength: "Por favor, no escribas más de 30 caracteres.",
                accept: "Solo puede ingresar letras "
            },
            lastName: {
                required: "Este campo es obligatorio.",
                minlength: "Por favor, no escribas menos de 3 caracteres.",
                maxlength: "Por favor, no escribas más de 30 caracteres.",
                accept: "Solo puede ingresar letras "
            },
            identification: {
                required: "Este campo es obligatorio.",
                number: "Por favor, escribe un número entero válido.",
                minlength: "Por favor, no escribas menos de 10 números.",
            },
            cell: {
                required: "Este campo es obligatorio.",
                number: "Por favor, escribe un número entero válido.",
                minlength: "Por favor, no escribas menos de 10 números.",
            },
            mail: {
                required: "Este campo es obligatorio.",
                email: "Por favor, escribe una dirección de correo válida",
            },
            province: {
                required: "Este campo es obligatorio.",
            },
            gender: {
                required: "Este campo es obligatorio.",
            },
            day: {
                required: "Este campo es obligatorio.",
                number: "Por favor, escribe un número entero válido.",
                range: "Escriba un día correcto",
            },
            month: {
                required: "Este campo es obligatorio.",
            },
            year: {
                required: "Este campo es obligatorio.",
                range: "Lo siento, usted es menor de edad",
                range2: "Por favor, escribe una fecha válida.",
                greaterThan:"Must be greater than {0}."
                
            },
            politica: {
                required: "Debes aceptar términos y condiciones",
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
