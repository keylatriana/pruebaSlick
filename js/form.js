$(document).ready(function(){
    $("#form-validation").validate({
        rules:{
            name:{
                    required: true,
                    minlength:3,
                    maxlength:30,
                    number: false,
                    lettersonly: true 
            },
            lastName:{
                required: true,
                minlength:3,
                maxlength:30,
                number: false,
                lettersonly: true 
            },
            identification:{
                required: true,
                number:true,
                min:10,
                max:10,
            },
            cell:{
                required: true,
                number:true,
                min:10,
                max:10,
            },
            mail:{
                required: true,
                email:true,
            },
            province:{
                required: true,
            },
            gender:{
                required: true,
            },
            date:{
                required: true,
            }
        },
        messages: {
            politica: {
                required: "Debes aceptar términos y condiciones",
            }
        }
        
    });

$("#enviar").click(function(){
    if ($("#form-validation").valid() ==false){
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
