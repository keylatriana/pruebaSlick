$(document).ready(function () {

    /*  $('.AlphabetsOnly').keypress(function (e) {
         var regex = new RegExp(/^[a-zA-Z\s]+$/);
         var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
         if (regex.test(str)) {
             return true;
             "Letters and spaces only please"
         }
         else {
             e.preventDefault();
             return false;
         }
     }); */
    //Metodo para validar texto
    jQuery.validator.addMethod("accept", function (value, element, param) {
        return value.match(new RegExp("." + param + "$"));
    });

    //metodo para validar a mayor de edad
 /*    $("#date").on("change", function () {
        var now = new Date();
        var birthdate = new Date($("#date").val()); // Se Procede a calcular en base a la fecha
        var nowyear = now.getFullYear();
        var birthyear = birthdate.getFullYear();
        var age = nowyear - birthyear + 1;
        alert("Invalid Date Range + ('age')");
        if (age > 18) { // Validamos si es mayor o menor
            // evento para el input habilitarlo
            console.log("Mayor de edad");
            RepresentanteValidacion.disabled = RepresentanteValidacion.disabled; // Deshabilitado
        }
        else if (age < 18) {
            console.log("Menor de edad");
            // evento para el input habilitarlo
            RepresentanteValidacion.disabled = !RepresentanteValidacion.disabled; // Habilitado
        }
    }); */
     /*    jQuery.validator.addMethod("greaterThan", 
        function(value, element, params) {

            if (!/Invalid|NaN/.test(new Date(value))) {
                return new Date(value) > new Date($('#date').val());
            }

            return isNaN(value) && isNaN($(params).val()) 
                || (Number(value) > Number($(params).val())); 
        },
        ); */
        /* var to = $(".year").val();

            if(Date.parse(to) >= 18){
            alert("Invalid Date Range");
            }
            else{
            alert("Valid date Range");
            } */

    /* function ValidarF() {
                var date1Var = $("#date").val();
                var date1;
                var mes = date1Var.toString().substr(2,2);       
                var dias = date1Var.toString().substr(0,2);
                var anio = date1Var.toString().substr(4,2);
                 //Si vienen 3 caracteres tiro error.
                
                if(date1Var.length==4) {
                  $("#date").val(date1Var+'18');
                  anio='18'
                }
                
                if (dias<1 ||dias>31)  {
                    validada.text("Dias entre 01 y 31");  
                    return;
                }
                
                anio='20'+anio;
                //Seteo el año hasta 2018
                if (anio>2021) {
                  validada.text("Año no puede ser mayor a 2021");  
                  return;
                }
                var fecha_formateada=[dias,mes,anio].join('-');
                var fecha_iso = [anio,mes,dias].join('-');
                var date=new Date(fecha_iso);
                
                if(date.getTime()>Date.now()) {
                  alert("Fecha no puede ser mayor a hoy");
                  return;
                }
                
                } */
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
                date: true,
                date2:true
            },
            month: {
                required: true,
                number: true,
                date: true,
                
                date2:true
            },
            year: {
                required: true,
                number: true,
                date: true,     
                
                date2:true         
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
                date: "Por favor, escribe una fecha válida."
            },
            month: {
                required: "Este campo es obligatorio.",
                date: "Por favor, escribe una fecha válida."
            },
            year: {
                required: "Este campo es obligatorio.",
                date: "Por favor, escribe una fecha válida.",
                range: "Escriba un día correcto",
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
        let date = $("#date").val()
        let politica = $("#politica").is(":checked")
    });
});
