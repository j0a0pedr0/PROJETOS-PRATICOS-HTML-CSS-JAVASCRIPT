
$(function(){



/*

    setTimeout(function(){
        console.log('iniciamos nossa aplicaçao');
        $('.box1').fadeOut(2000,function(){
            $('.box2').fadeTo('slow',0.9,function(){
                console.log('terminamos nossa aplicaçao');
            })
        });

    },3000)
*/
/*
    $('.box1').click(function(){
        $('.box2').slideToggle(4000,function(){
            location.href="http://www.google.com";
        });
    })
    
*/

/*
var timeOut = function(){
    $('.box2').animate({
        'width':'40%',
        'height':'500px',
        'marginLeft':'30%',
        'paddingTop':'0%'
    },2000)
}
$('body').click(function(){
    alert('paramos a nossa animaçao de timeooOut');
    clearTimeout(timer);
})

$('.box1').animate({
    'width':'40%',
    'height':'500px',
    'marginLeft':'30%',
    'paddingTop':'0%'
},2000,function(){
      timer = setTimeout(timeOut,3000);
});

*/

/*
$(function(){

    $('.box1').addClass('minhaclass');

})
$(function(){
    $('.box1').click(function(){
        $('.box1').removeClass('minhaclass');
    })
})

$('.box1').fild('child1').fild('.child2').css('color','green');
 
*/ 

    $.ajax({
        'url':'conteudo.html',
        //'method':'post',
        //'data':{'nome':'joao pedro','idade':'24'}

    }).done(function(data){
         $('#container').append(data);
    });


});


