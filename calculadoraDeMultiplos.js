/*calculadora de
multiplos e submultiplos


- input > unidade(A,I, ohm, W,V)
- input > valor numerico (450)
- input > qual conversão?
conversão > da unidada principal >>> mili*/
function multSub(){
    while(continua){
        let imput = parseInt(prompt("Digite\n[1] para corrente elétrica\n[2] para tensão elétrica\n[3] para resistência elétrica\n[4] potência elétrica "));

        switch(imput){
            case 1: 
                correnteEletrica();
                break;
            case 2:
                tensaoE();
                break;
            case 3:
                resisE();
                break;
            case 4:
                potenE();
        }
    }
}