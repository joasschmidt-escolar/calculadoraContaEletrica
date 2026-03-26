//criando a variavel do tipo lógico
let continua = true;
let potenciaWatt;

//repetição
while(continua){
    let escolha = parseInt(prompt("Digite\n[1] para consumo\n[2] para multiplos e submultiplos\n[3] para lei de ohm\n [4] para registor\n"));
    switch(escolha){
        case 1: 
            opcoes();
            kwh();
            break;
        case 2: 
            multSub();
            break;
        case 3:
            leiOhm();
            break;
        case 4:
            registor();
            break;
    }

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