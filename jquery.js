$("#cotizador").on("click", function(){
    $("#resultado").fadeIn(600)
})
$("#cotizador").on("click", function(){
$(".d-inline-block").animate({
    'margin-left': '850px'
    },
     2000, function() {
        $(".d-inline-block").animate({  borderSpacing: -360 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotate('+now+'deg)'); 
              $(this).css('-moz-transform','rotate('+now+'deg)');
              $(this).css('transform','rotate('+now+'deg)');
            },
            duration:'slow'
        },'linear')})})