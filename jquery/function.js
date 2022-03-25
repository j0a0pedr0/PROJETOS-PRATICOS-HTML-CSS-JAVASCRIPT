$(function(){


    verificarCliquemenu();

    function verificarCliquemenu(){
        $('a').click(function(){
            var href = $(this).attr('href');
            $.ajax({
                'beforeSend': function(){
                    console.log('estamos chamando o beforesend');
                },
                'timeout': 1000,
                'url':href,
                'error':function(){
                    console.log('ocorreu um erro!!');
                }
            }).done(function(data){
                $('#container').html(data);
            })

            return false;
        });
    }

});