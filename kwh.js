function kwh(){
    //valor do kw/h
    let valorkwh = 0.91;

    //variaveis
    let horas = parseFloat(prompt("Quanto tempo ficou ligado: "));

    //kilowatt
    let kilowatt = potenciaWatt / 1000;

    //valor por hora
    let valor = kilowatt * horas;

    //alertas
    alert("Valor: R$" + valor);
}