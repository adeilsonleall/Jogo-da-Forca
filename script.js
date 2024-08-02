/* 
 |---------------------------------------------|
 | Projeto: Jogo da forca.                     |
 | Autor: Adeilson Leal.                       |
 | Data Inicio: Jul/2024.                      |
 | Data Término: Em andamento.                 |
 | Controle de vercionamento: Git e Github.    |
 |---------------------------------------------| 
*/

/* Busca Elementos do DOM (Document Object Model - Modelo de Objeto de Documento): */
const campoDica = document.getElementById("campo-dica"); // Campo da página web onde será exibida a dica.
const campoPalavra = document.getElementById("campo-palavra"); // Campo da página web onde será exibida a palavra sorteada.
const campoChances = document.getElementById("campo-chances"); // Campo da página web onde será exibida as chances que o jogador possui.
const teclado=[...document.getElementsByClassName("btn")];

/* Biblioteca de palavras (Cada array representa uma categoria de palavras da biblioteca): */
const frutas = ["MANGA", "BANANA", "LARANJA", "JABUTICABA", "UVA", "KIWI", "PERA", "ABACATE", "GOIABA"]; // Array frutas.
const times = ["CORINTHIANS", "SANTOS", "FLUMINENSE", "BOTAFOGO", "PALMEIRAS", "FLAMENGO", "INTERNACIONAL"]; // Array times.
const animais = ["CACHORRO", "GATO", "RATO", "COELHO", "CAVALO", "GALINHA", "JUMENTO", "PAPAGAIO", "URUBU", "TATU", "SAPO"]; // Array animais.
const objetos = ["COPO", "CADERNO", "LIVRO", "CANETA", "PRATO"]; // Array objetos.
const biblioteca = [frutas, times, animais, objetos]; // Array de arrays contendo todas as categorias de palavras.

/* Variáveis auxliares para manipular biblioteca: */
const dica = ["FRUTA", "TIME", "ANIMAL", "OBJETO"]; // Texto devidamente ordenado que representa cada categoria. Será usado para prencher o campo de texto 'Dica' da página.
let posicaoCategoriaSorteada, posicaoPalavraSorteada; // Serão usadas para armazenar a posição da categoria e da palavra sorteada.
let palavraSorteada, palavraOculta = ['']; // palavraSorteada: Armazena a palavra sorteada; palavraOculta: Seu valor que será exibido na página, no inicio ela será preenchida com asteriscos (mesma quantidade da palavra sorteada).

/* Outras variáveis: */
let chances = 5;
let letraDigitada;

/* Código para realizar a escolha aleatória de uma palavra:*/
posicaoCategoriaSorteada = Math.floor(Math.random() * biblioteca.length); // Este trecho multiplica o número de categorias da biblioteca por um número aleatório (entre 0 e 1), após a multiplicação, arredonda-se esse valor obtendo-se um número representando uma das posições de categorias. 
posicaoPalavraSorteada = Math.floor(Math.random() * biblioteca[posicaoCategoriaSorteada].length); // De forma parecida, mas agora com a posição da categoria sorteada, essa linha de código gera aleatóriamente uma posição de uma palavra dentro da categoria já sorteada.
palavraSorteada= biblioteca[posicaoCategoriaSorteada][posicaoPalavraSorteada]; // Armazena a palavra sorteada de acordo com as posições de categoria e palavra encontradas aleatóriamente.


/* Funçoes*/
function inicializaChances(){    
    for(let i=0; i<chances; i++){
        let iconeChance = ['']; 
        iconeChance[i] = document.createElement('img');
        iconeChance[i].src = './assets/icones/icone_coracao.png';
        iconeChance[i].classList.add('icone-chances');
        campoChances.appendChild(iconeChance[i]);
    }
}
function atualizaCampoPalavra(){ // Função para atualizar campo palavra.
    campoPalavra.innerHTML = ''; // Limpa o campo de texto para reescrever a palavra atualizada.
    for(let i=0; i<palavraOculta.length; i++){
        campoPalavra.innerHTML += palavraOculta[i];
    }
}
function validacaoLetraDigitada(){
    let validacao = false;
    for(let i=0; i<palavraSorteada.length; i++){
        if(letraDigitada === palavraSorteada[i]){
            palavraOculta[i] = letraDigitada;
            validacao = true;
        }
    }
    if(!validacao){
        decrementaChances();
    }
}
function decrementaChances(){
    let primeiroFilho = campoChances.firstChild;
    const imgBoneco = document.getElementById('img-boneco');

    if(primeiroFilho){
        campoChances.removeChild(primeiroFilho);
        chances--;
        switch(chances){
            case 4:
                imgBoneco.setAttribute('src','./assets/imagens/forca_2.png');
            break;
            case 3:
                imgBoneco.setAttribute('src','./assets/imagens/forca_3.png');
            break;
            case 2:
                imgBoneco.setAttribute('src','./assets/imagens/forca_4.png');
            break;
            case 1:
                imgBoneco.setAttribute('src','./assets/imagens/forca_5.png');
            break;
            case 0:
                imgBoneco.setAttribute('src','./assets/imagens/forca_6.png');
            break;
        }
        console.log(primeiroFilho);
        console.log(chances);
    }
}

/* Inicializações */
for(let i=0; i<palavraSorteada.length; i++){ // Preenche a palavra oculta com asteriscos com a mesma quantidade de letras da palavra escolhida.
    palavraOculta[i] = '*';
}
campoDica.innerHTML = dica[posicaoCategoriaSorteada]; // Atualiza dica.
atualizaCampoPalavra(); // Atualiza campo palavra.
inicializaChances(); // Inicializa chances quando a página for atualizada.


// Varredura de teclas e execução de funções principais.
teclado.map((tecla)=>{ // Mapea array de teclas.
    tecla.addEventListener('click',()=>{ // Para teclas que forem clicadas executa código.

        letraDigitada = tecla.innerHTML; // Armazena a letra digitada.
        validacaoLetraDigitada(); // Verifica se a palavra sorteada possui a letra digitada.
        atualizaCampoPalavra(); // Atualiza o campo de texto.

    });
});
