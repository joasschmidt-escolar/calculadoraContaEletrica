function correnteEletrica(){
    //Em desenvolvimento
    let uni = parseInt(prompt("Digite\n[1] para nA --> A\n[2] para µA --> A\n[3] para mA --> A\n[4] para KA --> A\n[5] para MA --> A\n[6] para GA --> A"));
    let a;

    switch(uni){
        case 1:
            let na = parseInt(prompt("Digite o valor: "))
            a = na * (10 ** -9);
            alert(a);
            break;
        case 2:
            let ua = parseInt(prompt("Digite o valor: "))
            a = ua * (10  ** -6);
            alert(a);
            break;
        case 3:
            let ma = parseInt(prompt("Digite o valor: "))
            a = ma * (10  ** -3);
            alert(a);
            break;
        case 4:
            let kA = parseInt(prompt("Digite o valor: ")) 
            a = kA * (10 ** 3);
            alert(a);
            break;
        case 5:
            let mA = parseInt(prompt("Digite o valor: ")) 
            a = mA * (10 ** 6);
            alert(a);
            break;
        case 6:
            let gA = parseInt(prompt("Digite o valor: ")) 
            a = gA * (10 ** 9);
            alert(a);
            break;
    }
}