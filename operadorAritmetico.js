const notaPrimeiro = 8;
const notaSegundo  = 6.3;
const notaTerceiro = 7;
const notaQuatro   = 9.3;

let media = (notaPrimeiro + notaSegundo + notaTerceiro + notaQuatro) / 4;

if(media >= 7) {
    media += media * 0.1;
}

console.log(`A média é  ${media.toFixed(2)}`);



// Para abrir o terminal, basta ir em terminal, new terminal, e chamar o arquivo, digitando: node nomeDoArquivo.js //