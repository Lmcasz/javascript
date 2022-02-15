$("#cotizador").on("click", function(){
    $("#resultado").fadeIn(600)
})
$("#cotizador").on("click", function(){
$(".d-inline-block").animate({
    'margin-left': '900px'
    },
     2000, function() {
        $(".d-inline-block").animate({ borderSpacing: -2160}, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotate('+now+'deg)'); 
              $(this).css('-moz-transform','rotate('+now+'deg)');
              $(this).css('transform','rotate('+now+'deg)');
            },
            duration:2000
        },'linear')})
    })