$(document).ready(function () {
    $("div").click(function () {
        var line = $(this).text() * $(this).text();
        $(this).text(line);
    });

    $("li:odd").css("backgroundColor", "#C0C0C0");

    var f = 16;

    $("li").each(function () {
        $(this).css("font-size", f);
        f = f + 2;
    });

    var srcs = [];

    var initSrcs = function(){
        $("img").each(function(){
            srcs.push($(this).attr("src"));
            console.log($(this).attr("src"));
        });
    };

    $("img").each(function () {

        $(this).click(function () {
            if(srcs === false) initSrcs();
            $("img").each(function () {
                var r = Math.floor((Math.random() * srcs.length));
                $(this).attr("src", srcs[r]);
            });
        });
    });
});

