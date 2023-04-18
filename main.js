$(document).ready(function() {

    $(".primero").css({"background-color": 'red'})

    $("#btn-hide").click(function(){
        
        $("#segundo").hide();
    
    });

    $("#btn-show").dblclick(function(){
        
        $("#segundo").show();
    
    });

    $(".primero").mouseenter(function(){
        
        //se puede usar slideDown
        $("#segundo").fadeOut();
    
    });

    $(".primero").mouseleave(function(){
        
        //se puede usar slideUp
        $("#segundo").fadeIn();
    
    });

    $("#primero").mouseenter(function(){
        
        $("#segundo").fadeIn();
    
    });

    $("#btn-color").click(function(){
        
        $("h1").addClass("blue");
        alert("el color a cambiado");
    
    });


});