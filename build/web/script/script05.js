$(document).ready(function () {
    var warning = "Field not filled!";
    
    $(":text").each(function () {
        $(this).click(function () {
            $(this).css("color", "black");
            if($(this).val() == warning) $(this).val("");
        });
    });

    var check = function () {
        var res = true;

        $(":text").each(function () {
            if ($(this).val() == false || $(this).val() == warning) {
                $(this).val(warning);
                $(this).css("color", "red");
                res = false;
            }
        });
        return res;
    };

    $("button:first").click(function () {
        if (check() == true) {
            $("form").submit();
        } else {
            console.log("form not submitted");
        }
    });



});






