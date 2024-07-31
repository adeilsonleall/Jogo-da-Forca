/* 
 |---------------------------------------------|
 | Projeto: Jogo da forca.                     |
 | Autor: Adeilson Leal.                       |
 | Data: Jul/2024.                             |
 | Controle de vercionamento: Git e Github.    |
 |---------------------------------------------| 
*/

/* Busca Elementos do DOM (Document Object Model - Modelo de Objeto de Documento): */
const campoDica = document.getElementById("campo-dica"); // Campo da página web onde será mostrado/escrito a dica.
const campoPalavra = document.getElementById("campo-palavra");
const campoChances = document.getElementById("campo-chances");

/* Biblioteca de palavras (Cada array representa uma categoria de palavras da biblioteca): */
const frutas = ["MANGA", "BANANA", "LARANJA", "JABUTICABA", "UVA", "KIWI", "PERA", "ABACATE", "GOIABA"]; // Array frutas.
const times = ["CORINTHIANS", "SANTOS", "FLUMINENSE", "BOTAFOGO", "PALMEIRAS", "FLAMENGO", "INTERNACIONAL"]; // Array times.
const animais = ["CACHORRO", "GATO", "RATO", "COELHO", "CAVALO", "GALINHA", "JUMENTO", "PAPAGAIO", "URUBU", "TATU", "SAPO"]; // Array animais.
const objetos = ["COPO", "CADERNO", "LIVRO", "CANETA", "PRATO"]; // Array objetos.
const biblioteca = [frutas, times, animais, objetos]; // Array de arrays contendo todas as categorias de palavras.

/* Variáveis auxliares para manipular biblioteca: */
const dica = ["FRUTA", "TIME", "ANIMAL", "OBJETO"]; // Texto devidamente ordenado que representa cada categoria. Será usado para prencher o campo de texto 'Dica' da página.
let posicaoCategoriaSorteada, posicaoPalavraSorteada; // Serão usadas para armazenar a posição da categoria e da palavra sorteada.
let palavraSorteada, palavraOculta; // palavraSorteada: Armazena a palavra sorteada; palavraOculta: Seu valor que será exibido na página, no inicio ela será preenchida com asteriscos (mesma quantidade da palavra sorteada).

/* Outras variáveis: */
let chances = 6;

/* Código para realizar a escolha aleatória de uma palavra:*/
posicaoCategoriaSorteada = Math.floor(Math.random() * biblioteca.length); // Este trecho multiplica o número de categorias da biblioteca por um número aleatório (entre 0 e 1), após a multiplicação, arredonda-se esse valor obtendo-se um número representando uma das posições de categorias. 
posicaoPalavraSorteada = Math.floor(Math.random() * biblioteca[posicaoCategoriaSorteada].length); // De forma parecida, mas agora com a posição da categoria sorteada, essa linha de código gera aleatóriamente uma posição de uma palavra dentro da categoria já sorteada.
palavraSorteada= biblioteca[posicaoCategoriaSorteada][posicaoPalavraSorteada]; // Armazena a palavra sorteada de acordo com as posições de categoria e palavra encontradas aleatóriamente.


/* Cria função para atualizar chances: */
function atualizaChances(){
    for(let i=0; i<chances; i++){
        let iconeChance = [""]; 
        iconeChance[i] = document.createElement('img');
        iconeChance[i].src = './assets/icones/icone_coracao.png';
        iconeChance[i].classList.add('icone-chances');
        campoChances.appendChild(iconeChance[i]);
    }
};

/* Atualiza chances: */
atualizaChances();

/* Atualiza dica:*/
campoDica.innerHTML = dica[posicaoCategoriaSorteada];

/* Código para preencher a palavra oculta com asteriscos com a mesma quantidade de letras da palavra escolhida: */
palavraOculta = "*".repeat(palavraSorteada.length);

/* Atualiza palavra oculta: */
campoPalavra.innerHTML = palavraOculta;
