//criando a variavel do tipo lógico
let continua = true;
let potenciaWatt;

//repetição
while(continua){
    //chamando a função
    opcoes();
    kwh();

    //fazendo a pergunta
    let pergunta = prompt("Quer continuar? ");
    
    //verificando resposta
    if(pergunta == "sim" || pergunta == "Sim"){
        continua = true;
    } else if(pergunta == "nao" || pergunta == "Nao"){
        continua = false;
    } else{
        alert("Consideramos com não!");
        continua = false;
    }
}