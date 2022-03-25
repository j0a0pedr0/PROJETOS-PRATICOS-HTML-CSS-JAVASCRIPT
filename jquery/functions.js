$(function(){



    verificarCliquemenu();

    function verificarCliquemenu(){
        ('a').click(function(){
            alert('ola mundo!!');
            var href = $(this).attr('href');

            
        });


    }

    $('body').css('background','red');



})