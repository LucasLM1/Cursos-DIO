function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";// injeta textos dentro do HTML
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){ //IMPORTANTE VOU USAR MUITO AINDA
    window.open("https://www.bmw.com.br/pt/index.html") // função ativada ao clicar no texto "Obrigado por clicar"
    //window.location.href ="https://www.bmw.com.br/pt/index.html" //igual o de cima, po´rem abre na mesma janela que o documento html
}


function trocar(){
    document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(){
    document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui";
}

/*function soma(n1, n2){
    return n1 + n2;
}

function validaIdade (idade){
    var idade;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual sua idade?");
console.log(validaIdade(idade));
*/


//alert(soma(5,10));

//Trabalhando com data atual em JavaScript
/*var d= new Date(); 
alert(d); // vai trazer dia, hora, fuso horario e etc
alert(d.getMounth()+1); // mostra apenas o numero do mes de forma correta
alert(d.getDay()); // tras apenas o dia
alert(d.getHours()); // tras apenas as horas
alert(d.getMinutes()); // tras apenas os minutos
*/


//Laço de repetição for
/*var count = 0;
for(count =0; count <=5; count++){
    alert(count);
};
*/


//Laço de repetição while
/*var count = 0; // valor inicial
while (count <= 5){ // ENQUANTO contador for menor que 5 a variavel count recebe +1 de valor
    console.log(count);
    count = count + 1; // pode usar count++ onde ele soma o valor dele mesmo acrescido de um
};
*/


//Condicionais if e else
/*var idade = prompt("Qual sua idade?"); // Pop-Up com botão para por a  onde var idade recebe o valor digitado no prompt e processa a resposta
//var idade = 18;
if(idade >= 18){
    alert("maior de idade"); // caso seja maior de idade será impressa esta mensagem
}else{
    alert ("menor de idade"); //caso seja menor de idade será impressa esta mensagem
}
*/


//Método Lista dicionario
//var fruta = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
//console.log(fruta);


//Método dicionario singular
//var fruta = {nome: "maça", cor:"vermelha"}
//console.log(fruta);


//Método lista e array
//var lista = ["maça", "pera", "uva"];
//lista.push("morango") //push para adicionar elementos
//lista.pop(); //pop para tirar
//console.log(lista); // mostra a lista e seus itens
//console.log(lista.length); // mostra o tamanho da lista
//console.log(lista.reverse()); // mostra os elementos da lista ao contrario
//console.log(lista.toString()); //mostra todos os elementos da lista como uma String/texto
//console.log(lista.join(" - ")); //junto com String separa os elementos com traço


//Método alert e console.log
//var nome = "Lucas Souza";
//var idade = "19";
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos"); // alert gera um Pop-Up na página com uma mensagem escrita dentro de parenteses e aspas duplas
//console.log(nome);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));