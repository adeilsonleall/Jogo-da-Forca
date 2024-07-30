/* 
 |---------------------------------------------|
 | Projeto: Jogo da forca.                     |
 | Autor: Adeilson Leal.                       |
 | Data: Jul/2024.                             |
 | Controle de vercionamento: Git e Github.    |
 |---------------------------------------------| 
*/

// Busca Elementos do DOM (Document Object Model - Modelo de Objeto de Documento):
const campoDica = document.getElementById("campo-dica"); // Campo da página web onde será mostrado/escrito a dica.
const campoPalavra = document.getElementById("campo-palavra");

// Biblioteca de palavras:
// Cada array representa uma categoria de palavras da biblioteca
const frutas = ["MANGA", "BANANA", "LARANJA", "JABUTICABA", "UVA", "KIWI", "PERA", "ABACATE", "GOIABA"]; // Array frutas.
const times = ["CORINTHIANS", "SANTOS", "FLUMINENSE", "BOTAFOGO", "PALMEIRAS", "FLAMENGO", "INTERNACIONAL"]; // Array times.
const animais = ["CACHORRO", "GATO", "RATO", "COELHO", "CAVALO", "GALINHA", "JUMENTO", "PAPAGAIO", "URUBU", "TATU", "SAPO"]; // Array animais.
const objetos = ["COPO", "CADERNO", "LIVRO", "CANETA", "PRATO"]; // Array objetos.
const biblioteca = [frutas, times, animais, objetos]; // Array de arrays contendo todas as categorias de palavras.
// Variáveis auxliares:
const dica = ["FRUTA", "TIME", "ANIMAL", "OBJETO"]; // Texto devidamente ordenado que representa cada categoria. Será usado para prencher o campo de texto 'Dica' da página.
let posicaoDicaSorteada, posicaoPalavraSorteada;
let palavraSorteada, palavraOculta;



/* Código para realizar a escolha aleatória de uma dica e uma palavra:*/
posicaoDicaSorteada = Math.floor(Math.random() * dica.length);
posicaoPalavraSorteada = Math.floor(Math.random() * biblioteca[posicaoDicaSorteada].length);
palavraSorteada= biblioteca[posicaoDicaSorteada][posicaoPalavraSorteada];

console.log(posicaoDicaSorteada);
console.log(posicaoPalavraSorteada);
console.log(posicaoPalavraSorteada);

/* Atualiza chances: */


/* Atualiza dica:*/
campoDica.innerHTML = dica[posicaoDicaSorteada];

/* Código para preencher a palavra oculta com asteriscos com a mesma quantidade de letras da palavra escolhida: */
palavraOculta = "*".repeat(palavraSorteada.length);

/* Atualiza palavra oculta: */
campoPalavra.innerHTML = palavraOculta;
