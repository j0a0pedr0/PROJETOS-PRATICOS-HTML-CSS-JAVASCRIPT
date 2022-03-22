<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/stytle.css" type="text/css">
        <title>aula nova</title>
        
    </head>
    <body>
        
        <header>
            <div class="center">
                <div class="logo">
                    <h2>Facebook</h2>
                </div><!--logo-->
                <form method="post" class="form-login">

                    <div class="form-elements" >
                        <p>E-mail ou Telefone</p>
                        <input type="email" required/>
                    </div><!--form-elements-->

                    <div class="form-elements">
                        <p>Senha</p>
                        <input type="password" required/>
                    </div><!--form-elements-->

                    <div class="form-elements">
                        <input type="submit" name="acao" value="Enviar"/>
                    </div><!--form-elements-->
                   
                </form><!--form-login-->
                <div class="clear"></div>
                <a href="#"><p>esqueceu a senha?</p></a>
            </div><!--center-->
        </header><!--cabeçalho-->

        <section class="main">
            <div class="center">
                <div class="img-pessoas">
                    <img src="./image/mundo.pg.jpg"/>
                </div><!--img-pessoas-->

                <div class="abrir-conta">
                    <h2>Abra sua conta</h2>
                    <h3>É gratuito e sempre será!</h3><br>
                    
                    <form class="criar-conta">
                        <div class="w50">
                            <input type="text" placeholder="name" required/>
                        </div><!--50w-->

                        <div class="w50 w55" >
                            <input type="text" placeholder="sobrenome" required/>
                        </div><!--50w-->

                        <div class="w100">
                            <input type="email" placeholder="email" required/>
                        </div><!--100w-->

                        <div class="w100">
                            <input type="password" placeholder="nova senha" required/>
                        </div><!--100w-->
                        <div class="clear"></div>
                        <div class="w100">
                            <h2>Data De Nascimento</h2>
                            <select name="nascimento-dia" class="nascimento">
                                <?php 
                                    for($i = 1; $i <= 31; $i++){
                                ?>
                                <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                <?php } ?>
                            </select>

                            <select name="nascimento-mes" class="nascimento">
                                <option value="0">Janeiro</option>
                                <option value="0">Fevereiro</option>
                                <option value="0">Março</option>
                                <option value="0">Abril</option>
                                <option value="0">Maio</option>
                                <option value="0">junho</option>
                                <option value="0">julho</option>
                                <option value="0">Agosto</option>
                                <option value="0">Setembro</option>
                                <option value="0">Outubro</option>
                                <option value="0">Novembro</option>
                                <option value="0">Dezembro</option>
                            </select>

                            <select name="nascimento-ano" class="nascimento">
                                <?php 
                                    for($i = 1950; $i <= 2022;$i++){
                                ?>
                                <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                <?php } ?>
                            </select>
                        </div><!--box-date-select-->
                       
                        <div class="w100">
                            <div class="input-radio">
                                <input type="radio" name="sexo" value="masculino">
                                <h2>Masculino</h2>
                            </div><!--Radio-->
                            
                            <div class="input-radio">
                                <input type="radio" name="sexo" value="feminino">
                                <h2>Feminino</h2>
                            </div><!--Radio-->
                        </div>
                        <div class="clear"></div>                
                        <div class="w100">
                            <input type="submit" name="acao" value="cadastrar"/>
                        </div><!--w100 --> 
                        <div class="clear"></div>
                    </form><!--formulario para criar conta!!-->
                </div><!--abrir-conta-->      
            </div><!--center--> 
        </section><!--sessão central c formulario-->

        <section class="linguas">
            <div class="center">
                <a class="selected-linguas" href="#">Português (BR)</a>
                <a href="#">Português (BR)</a>
                <a href="#">Português (BR)</a>
                <a href="#">Português (BR)</a>
                <a href="#">Português (BR)</a>
                <a href="#">Português (BR)</a>
                <a href="#">Português (BR)</a>
                <a href="#">Português (BR)</a>
            </div><!--FIM da center-->

            <div class="center">
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                <a href="#">Lorem Ipsum</a>
                
            </div><!--FIM da center-->

        </section><!--FIM das linguas-->                                                    

    </body>
</html>