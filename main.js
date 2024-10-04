
// função do exercicio 04
function obterValor() {
    // Pega o valor do input
    var numero = document.getElementById("numero").value;
    
    // Converte o valor para número inteiro ou decimal (se necessário)
    numero = parseFloat(numero);

    // Verifica se o número é positivo ou negativo
    if (numero >= 0) {
        document.getElementById("resultado_ex04").innerHTML = `${numero}  É UM NÚMERO POSITIVO`;
    } else {
        document.getElementById("resultado_ex04").innerHTML = `${numero}  É UM NÚMERO NEGATIVO`;
    }
}

// função do exercicio 05
function dividir(){
    // Pega o valor do input
    var n1_ex05 = document.getElementById("n1_ex05").value;
    var n2_ex05 = document.getElementById("n2_ex05").value;

    // Converte o valor para número inteiro ou decimal (se necessário)
    n1_ex05 = parseFloat(n1_ex05);
    n2_ex05 = parseFloat(n2_ex05);

    // Verifica se o número pode ser dividido
    if (n2_ex05 == 0) {
        document.getElementById("resultado_ex05").innerHTML = `  NÃO É POSSÍVEL DIVIDIR POR ZERO`;
    } else {
        let resultado = n1_ex05 / n2_ex05
        document.getElementById("resultado_ex05").innerHTML = `${n1_ex05} DIVIDIDO POR ${n2_ex05} é ${resultado}`;
    }
}

// função do exercicio 06
function multiplicar(){
    // Pega o valor do input
    var n1_ex06 = document.getElementById("n1_ex06").value;
    var n2_ex06 = document.getElementById("n2_ex06").value;

    // Converte o valor para número inteiro ou decimal (se necessário)
    n1_ex06 = parseFloat(n1_ex06);
    n2_ex06 = parseFloat(n2_ex06);

    // calculo da multiplicação
    
        let resultado = n1_ex06 * n2_ex06
        document.getElementById("resultado_ex06").innerHTML = `${n1_ex06} MULTIPLICADO POR ${n2_ex06} é =  ${resultado}`;
   
}

// função do exercicio 07
function porcentagem(){
    // Pega o valor do input
    var n1_ex07 = document.getElementById("n1_ex07").value;
    
    // Converte o valor para número inteiro ou decimal (se necessário)
    n1_ex07 = parseFloat(n1_ex07);
    
    // calculo do desconto
    let desconto = n1_ex07 * 0.4
    let valor_final = n1_ex07 - desconto
    document.getElementById("valor_principal").innerHTML = `O valor da compra é de R$ ${n1_ex07}`;
    document.getElementById("valor_final").innerHTML = `Com o desconto de 40%, Sairá por R$ ${valor_final}`;
   
}

// função do exercicio 08
function media(){
    // Pega o valor do input
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var nota4 = document.getElementById("nota4").value;
    
    // Converte o valor para número inteiro ou decimal (se necessário)
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    nota4 = parseFloat(nota4);
    
    // calculo da média
    let media = (nota1 + nota2 + nota3 + nota4) / 4 
    if (media >=6){
        document.getElementById("resultado_ex08").innerHTML = `Média ${media}, Você esta Aprovado`;
    }
    
    if (media < 6 ){
        document.getElementById("resultado_ex08").innerHTML = `Média ${media}, Você esta Recuperação`;
    }
    if (media <=3){
        document.getElementById("resultado_ex08").innerHTML = `Média ${media}, Você esta Reprovado`;
    }
   
}

// função do exercicio 08
// Função para calcular a área de um círculo
function calcularAreaCirculo() {
    let raio = document.getElementById("n1_ex09").value;
    const pi = 3.1416;
    let area = pi * Math.pow(raio, 2);
    document.getElementById("resultado_ex09").innerHTML = `A área do círculo com raio ${raio} é: ${area}`;
}

// Exemplo de uso
//let raio = prompt("Informe o valor do raio do círculo:");



