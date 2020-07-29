////Functions
//exercício2
var numbers1 = [1,3,4,9,5,7,2,6,20,11,12,17];

var numbers2 = [1,3,4,9,5,7,2,6,15,12];

document.getElementById("array1").textContent = numbers1;

document.getElementById("array2").textContent = numbers2;


function ordCresc(){
    numbers1.sort(function(a, b) {
      return a - b;});
      document.getElementById("array1").textContent = numbers1;
    alert(`A resposta é: ${numbers1}`);
}
//exercício3
function ordDecresc(){
    
    
    numbers2.sort(function(a, b) {
      return b - a;
    });
    document.getElementById("array2").textContent = numbers2;
    alert(`A resposta é: ${numbers2}`);
}

//exercício4
function contarCarac() {
    var stringCarac = document.getElementById("longText").textContent;
    //"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

	document.getElementById("campoResposta").textContent = stringCarac.length;
} 

//exercício5
function substituirSrting1() {
	var stringAltNew = document.getElementById("stringAlt").textContent;
  var stringAltNewa = stringAltNew.replace("marcelo", "joão")
  document.getElementById("stringAlt").textContent = stringAltNewa;
}

function substituirSrting2() {
	var stringAltNew = document.getElementById("stringAlt").textContent;
  var stringAltNewa = stringAltNew.replace("pão", "torta")
  document.getElementById("stringAlt").textContent = stringAltNewa;
}

function removerString1() {
  var stringAltNew = document.getElementById("stringAlt").textContent;
  var stringAltNewa = stringAltNew.replace("joão", "");
  document.getElementById("stringAlt").textContent = stringAltNewa;
}

function removerString2() {
  var stringAltNew = document.getElementById("stringAlt").textContent;
  var stringAltNewa = stringAltNew.slice(5);
  document.getElementById("stringAlt").textContent = stringAltNewa;
}

function addString() {
  var stringAltNew = document.getElementById("stringAlt").textContent;
  var stringAltNewa = stringAltNew + " da IBRS";
  document.getElementById("stringAlt").textContent = stringAltNewa;
}

function apartirCasa() {
  var stringAltNew = document.getElementById("stringAlt").textContent;
  var stringAltNewa = stringAltNew.split("bou torta na ");
  document.getElementById("stringAlt").textContent = stringAltNewa;
}

//exercicio6
var meuArray = ['João','Marcelo','Marcus','Lucas','Nelson'];
document.getElementById("array").textContent = meuArray;
function pushPalavra() {
  meuArray.push("Azeite");
  document.getElementById("array").textContent = meuArray;
}

function removerArray1() {
  meuArray.splice(meuArray.indexOf("Marcelo"), meuArray.indexOf("Marcelo"));
  document.getElementById("array").textContent = meuArray;
}

function ordAlf() {
  meuArray.sort();
  document.getElementById("array").textContent = meuArray;
}

function contArray() {
  var qtdArray = meuArray.length;
  alert(`O array contém ${qtdArray} registros`);
}

