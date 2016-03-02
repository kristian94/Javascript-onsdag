$(document).ready(function(){
    
    var p = ($(document.createElement("p")));
    $(p).append("text");
    $("body").append(p);
    
    var colors = ["green", "red", "blue"];
    
    var divs = $("div");
    for (var i = 0, max = divs.length; i < max; i++) {
        divs[i].style.backgroundColor = colors[i];
    }
    
    $("div:first-of-type").click(function(){
        $(this).hide();
    });
    
    $("div:nth-of-type(2)").hover(function(){
        $(this).css("border-width", "4");
    }, function(){
        $(this).css("border-width", "1");
    });
    
    $("div:nth-of-type(2)").click(function(){
        $("div:nth-of-type(3)").css("font-size", 30);
    });
    
    
    
    
    
    
    
    
    
});

