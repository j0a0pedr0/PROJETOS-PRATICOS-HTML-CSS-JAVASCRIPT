$(function(){

/* 
    var frase = 'joaopedrobarreto1000@gmail.com';
    var verificar = frase.match(/(.*?)(@)(.*?)$/);

    if(verificar != null){
        console.log('encontramos algo');
        console.log(verificar[1]);
        console.log(verificar[2]);
        console.log(verificar[3]);
    }else{
        console.log('nao encontramos nada')
    }

*/

    /*logica de botao do close dos sites simples!! */


    //Funçoes de abrir e fechar formulario
    abrirjanela();
    verificarcliquefechar();

    function abrirjanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        });
    }

    function verificarcliquefechar(){
        var el = $('.closebtn');

        el.click(function(){
            $('.bg').fadeOut();
        });

        $('.form').click(function(e){
            e.stopPropagation();
        });
    }


    //Eventos do fomulário

    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this));
    })
    
    $('form#form1').submit(function(e){
       // e.preventDefault();
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        if(verificarNome(nome) == false){
            aplicarcampoInvalido($('input[name=nome]'));
            return false;

        }else if(verificarTelefone(telefone) == false){
            aplicarcampoInvalido($('input[name=telefone]'));
            return false;
        }else if(verificarEmail(email) == false){
            aplicarcampoInvalido($('input[name=email]'));
            return false;
        }
        
        
        else{
            alert('formulario enviado com sucesso');
        }

        //SE CHEGOU ATE O FINAL É PQ ESTA TUDO OKAY!
    });

    //Funçoes para estilizar o campo do Formulário

    function aplicarcampoInvalido(el){
        el.css('color','red');
        el.css('border','3px solid red');
        el.data('invalido','true');
        el.val('campo Invalido');
    }

    function resetarCampoInvalido(el){
        el.css('color','black');
        el.css('border','1px solid #ccc');
        el.data('invalido','true');
        el.val('');
    }

    //Funçoes para verificar nossos campos
    
    function verificarNome(nome){
        //contando a quantidade de espaços e os respectivos valores.
        if(nome == ''){
            return false;
        }
        
        var amount = nome.split(' ').length;
        var splintsr = nome.split(' ');
        if(amount >= 2){
            for(var i = 0; i < amount; i++){
                if(splintsr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    console.log('estamos aqui');
                }else{
                    
                    return false;
                }
            
                }
        }else{
            return false;
        }
    }


    function verificarTelefone(telefone){
        if(telefone == ''){
            return false;
        }

        if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
            return false;
        }
    }

    function verificarEmail(email){
        if(email == ''){
            return false;
        }

        if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
            return false;
        }
    }


});