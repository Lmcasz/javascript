$("#cotizador").on("click", function(){
    $("#resultado").fadeIn(600)
})
$("#cotizador").on("click", function(){
$(".d-inline-block").animate({
    'margin-left': '800px'
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
////////////////////mostrar el form//////////////////
$(".btnAgregarMostrar").click(() => {
    $("#formAgregar").fadeIn(5000)
    $(".btnAgregarMostrar").hide(10);
  })

////////////////mostrar form cryptos//////////////////
$(".btnMostrarCryptos").click(() => {
    $("#cryptoForm").fadeIn(5000)
    $(".btnMostrarCryptos").hide(10);
  })