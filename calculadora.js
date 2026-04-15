// calculadora.js

// Pegando os argumentos da linha de comando
const args = process.argv.slice(2);

// Validar se os 3 argumentos foram informados
if (args.length !== 3) {
    console.log("Erro: Você deve informar 3 argumentos.");
    console.log("Uso: node calculadora.js <numero1> <operador> <numero2>");
    process.exit(1);
}

// Separando os argumentos
let numero1 = Number(args[0]);
let operador = args[1];
let numero2 = Number(args[2]);

// Verificar se os números são válidos
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Erro: Os valores informados devem ser números válidos.");
    process.exit(1);
}

let resultado;

// Realizar a operação escolhida
switch (operador) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        // Tratar divisão por zero
        if (numero2 === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
            process.exit(1);
        }
        resultado = numero1 / numero2;
        break;
    default:
        console.log("Erro: Operador inválido. Use +, -, * ou /.");
        process.exit(1);
}

// Exibir o resultado formatado
console.log(`Resultado: ${numero1} ${operador} ${numero2} = ${resultado}`);
