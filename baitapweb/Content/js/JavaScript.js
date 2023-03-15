
$(document).ready(function () {
    /*time*/
    $("#AddDateTime").click(function () {
        var v = $("#DateTime1").timespinner('getValue');
        $("#DateTime2").timespinner('setValue', v);
    })
    $(".open").click(function () {
        $('#w').window('open')
    })
    /*slide*/
    $("#getValue").click(function () {
        var a = $("#value").val()
        $('.es').slider('setValue', a)
    })
    $("#hValue").click(function () {
        var a = $(".slider-tip").text()
        $('#value').val(a)
    })

    /*apple*/
    
    $('.sb1').switchbutton({
        checked: false,
        onChange: function (checked) {
            if (checked) {
                $("#imgFruit").attr("src", "https://banner2.cleanpng.com/20180310/qle/kisspng-apple-food-clip-art-cartoon-red-apple-5aa492449892a4.6696116015207347886249.jpg")
            } else {
                $("#imgFruit").attr("src", "")
            }
        }
    })



    /*orange*/
   
    $('.sb2').switchbutton({
        checked: false,
        onChange: function (checked) {
            if (checked) {
                $("#imgFruit").attr("src", "https://thuviendohoa.vn/upload/images/items/hinh-anh-qua-cam-vang-tuoi-ngon-png-73.jpg")
            } else {
                $("#imgFruit").attr("src", "")
            }
        }
    })
   
    /*banana*/
   
    $('.sb3').switchbutton({
        checked: false,
        onChange: function (checked) {
            if (checked) {
                $("#imgFruit").attr("src", "https://thuviendohoa.vn/upload/images/items/hinh-anh-dep-qua-chuoi-xanh-tuoi-ngon-png-601.jpg")
            } else {
                $("#imgFruit").attr("src", "")
            }
        }
    })

    $("#disable").click(function () {
        $('.sb').switchbutton('disable');
    })
    $("#enable").click(function () {
        $('.sb').switchbutton('enable');
    })
    $("#reset").click(function () {
        $('.sb').switchbutton({
            checked: false,
        })
        $("#imgFruit").attr("src", "")
    })


    $("#btn_rsRB").click(function () {
        $(".rb").radiobutton({ checked: false })
        $("#tb").tagbox('clear')
    })


    $(".rb1").radiobutton({
        checked: false,
        onChange: function (checked) {
            $("#tb").tagbox('setValue', 'Item1')

        }
    })


    $(".rb2").radiobutton({
        checked: false,
        onChange: function (checked) {
            $("#tb").tagbox('setValue', 'Item2')
        }
    })

    $(".rb3").radiobutton({
        checked: false,
        onChange: function (checked) {
            $("#tb").tagbox('setValue', 'Item3')
        }
    })

 
    

    $("#tb").tagbox({
        onRemoveTag: function () {
            var target = this;
            var values = $(target).tagbox('getValues');
            $('.sb3').switchbutton({checked: false,}) 
        }
    })
})




 