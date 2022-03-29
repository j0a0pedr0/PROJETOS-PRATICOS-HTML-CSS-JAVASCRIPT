$(function(){

    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').length;
    var delay = 4000;

    initSlider();
    cliqueSlider();
    

    function initSlider(){
        for(var i = 0; i < indiceMaximo; i++){

            if(i == 0){
                $('.bullets-nav').append('<span style="background-color:black;"></span>')
            }else{
                $('.bullets-nav').append('<span></span>');
            }
        }
        $('.slider img').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider();    
        },delay);
    }
    




    /*//////evento adiciondo nos circulos de opçoes de imagem logo abaixo dela q ao clicar poderá
     redirecionado o slider para a imagem requerida*/
    function cliqueSlider(){
        $('.bullets-nav span').click(function(){
            $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
            indiceAtual = $(this).index();
            $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
            $('.bullets-nav span').css('background-color','#ccc');
            $(this).css('background-color','black');
            
        });
    }

/*/////////////aqui temos basicamente dois comando sobre o 'slider img' 
sendo o primeiro de desaparecimento e o segundo de surgimento com seus 
respectivos times...no caso '(50)' ou seja a funçao basicamento alternar 
o slider conforme o time estabelicido... */ 
    function alternarSlider(){
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual+=1;
        if(indiceAtual == indiceMaximo)
        indiceAtual = 0;
        $('.bullets-nav span').css('background-color','#ccc');
        $('.bullets-nav span').eq(indiceAtual).css('background-color','black');
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
        
    }
});