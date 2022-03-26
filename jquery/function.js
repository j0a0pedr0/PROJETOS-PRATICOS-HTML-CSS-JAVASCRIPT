$(function(){


    verificarCliquemenu();

    function verificarCliquemenu(){
        $('a').click(function(){
            var href = $(this).attr('href');
            $.ajax({
                'beforeSend': function(){
                    console.log('estamos chamando o beforesend');
                },
                'timeout': 10000,
                'url':href,
                'error':function(jqXHR,textStatus,errorTHrown){
                    alert('pagina nao encontrada')
                },

                'success': function(data){
                    // $('#container').html(data);
                     $(data).appendTo('#container').fadeIn();
                }
            })

            return false;
        });
    }

});