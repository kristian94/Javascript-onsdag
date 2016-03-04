$(document).ready(function () {
    var hidden;
    var displayed;

    var lastActEqual;

    var divs = $("div");
    for (var i = 1, max = divs.length - 1; i < max; i++) {
        (function (i) {
            $(divs[i]).click(function () {
                if (displayed !== undefined)
                    displayed += $(divs[i]).text();
                else
                    displayed = $(divs[i]).text();
                update();
            });
        })(i);
    }

    var update = function () {
        //var n = document.createTextNode(displayed);
        
        $("#display").text(displayed);
        hidden = (eval(displayed));
    };
    
    $("#equal").click(function () {
        lastActEqual = true;
        $("#display").text(hidden);
        displayed = hidden;
    });
});