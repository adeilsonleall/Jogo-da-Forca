/* Busca Elementos do DOM */
const campoDica=document.getElementById("dica");

/* Variáveis: */


/* Biblioteca de palavras:*/
const frutas=["MANGA","BANANA","LARANJA","JABUTICABA","UVA","KIWI","PERA","ABACATE","GOIABA"];
const times=["CORINTHIANS","SANTOS","FLUMINENSE","BOTAFOGO","PALMEIRAS","FLAMENGO","INTERNACIONAL"];
const animais=["CACHORRO","GATO","RATO","COELHO","CAVALO","GALINHA","JUMENTO","PAPAGAIO","URUBU","TATU","SAPO"];
const objeto=["COPO","CADERNO","LIVRO","CANETA","PRATO"];
const palavras=[frutas,times,animais,objeto];
const dica = ["FRUTA","TIME","ANIMAL","OBJETO"];
let aleatorio1, aleatorio2;

/* Código para realizar a escolha aleatória de uma dica e palavra:*/
aleatorio1=Math.floor(Math.random()*palavras.length);
aleatorio2=Math.floor(Math.random()*palavras[aleatorio1].length);
pv_escolhida=palavras[aleatorio1][aleatorio2];

console.log(aleatorio1);
console.log(aleatorio2);
console.log(pv_escolhida);

/* Atualiza chances: */


/* Atualiza dica:*/
campoDica.innerHTML=dica[aleatorio1];

/* Código para preencher a palavra oculta com asteriscos com a mesma quantidade de letras da palavra escolhida: */

/* Atualiza palavra oculta: */
