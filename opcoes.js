function opcoes(){
    let item = parseInt(prompt("Digite\n[1] para geladeira\n[2] para Tv\n[3] para ar condiconado\n[4] para chuveiro elétrico"));
    

    switch(item){
        case 1: 
            potenciaWatt = 800;
            break;
        case 2:
            potenciaWatt  = 35;
            break;
        case 3:
            potenciaWatt = 1200;
            break;
        case 4:
            potenciaWatt = 800;
            break;
    }
}