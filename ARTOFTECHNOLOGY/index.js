$(window).ready(function(){

    let abrir = document.getElementById("siderbar-button");
    abrir.onclick = openRightMenu;

    let cerrar = document.getElementById("cerrar");
    cerrar.onclick = closeRightMenu;

    var body = $("html, body");
        
    $("#banner").on('wheel', function(event){
        
        if(event.originalEvent.wheelDelta < 0) {
                body.stop().animate({scrollTop:980}, 500, 'swing')
                location.href = "#nosotros"
        }
    });
    $("#contenedor_nosotros").on('wheel', function(event){
        if(event.originalEvent.wheelDelta > 0) {
                body.stop().animate({scrollTop:0}, 500, 'swing')
                location.href = "#cabecera"
        }else{
                body.stop().animate({scrollTop:1960}, 500, 'swing')
                location.href = "#tiposdeproductos"
        }
    });
    for (let i = 1; i <= 5; i++){
        $("#tipo"+i).on('wheel', function(event){
            if(event.originalEvent.wheelDelta > 0) {
                    body.stop().animate({scrollTop:980}, 500, 'swing')
                    location.href = "#nosotros"
            }else{
                    body.stop().animate({scrollTop:2940}, 500, 'swing')
                    location.href = "#recomendado"
            }
        });
    }
    $("#contenedor_recomendado").on('wheel', function(event){
        if(event.originalEvent.wheelDelta > 0) {
                body.stop().animate({scrollTop:1960}, 500, 'swing')
                location.href = "#tiposdeproductos"
        }else{
                body.stop().animate({scrollTop:3931}, 500, 'swing')
                location.href = "#seccion-footer"
        }
    });
    $("#pie").on('wheel', function(event){
        if(event.originalEvent.wheelDelta > 0) {
                body.stop().animate({scrollTop:2940}, 500, 'swing')
                location.href = "#recomendado"
        }
    });
});

function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}