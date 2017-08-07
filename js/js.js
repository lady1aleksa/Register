$(document).ready(function(){


    function validateTel(tel) {
        var re = /^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/;
        return re.test(tel);
    }

    function validate() {
        var tel = $("#tel").val();
        var name = $("#name").val();
        var surname = $("#surname").val();
        if (!validateTel(tel)){
            $('.tel_warning').show(100);
        }
        if(!name){$('.name_warning').show(100);}
        if(!surname){$('.surname_warning').show(100);}
        return false;
    }

    $("#submit").click(validate);
    $('.input').focus(function () {
        $('.warning').hide(100);
    });
});
