function verificarNumeros(num1, num2) {
    var soma = num1 + num2;
    var resultado = "";
    
    if (num1 === num2) {
        resultado += "Os números " + num1 + " e " + num2 + " são iguais. ";
    } else {
        resultado += "Os números " + num1 + " e " + num2 + " são diferentes. ";
    }
    
    if (soma > 10) {
        resultado += "A soma dos números é maior que 10. ";
    } else if (soma < 10) {
        resultado += "A soma dos números é menor que 10. ";
    } else {
        resultado += "A soma dos números é igual a 10. ";
    }
    
    if (soma > 20) {
        resultado += "A soma dos números é maior que 20.";
    } else if (soma < 20) {
        resultado += "A soma dos números é menor que 20.";
    } else {
        resultado += "A soma dos números é igual a 20.";
    }
    
    return resultado;
}

// Exemplo de uso da função
console.log(verificarNumeros(5, 5));