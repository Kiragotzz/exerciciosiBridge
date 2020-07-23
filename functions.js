//Functions
//exercício2
function ordCresc(){
    
    var numbers = [1,3,4,9,5,7,2,6,20,11,12,17];
    
    numbers.sort(function(a, b) {
      return a - b;
    });
    alert(`A resposta é: ${numbers}`);
}
//exercício3
function ordDecresc(){
    
    var numbers = [1,3,4,9,5,7,2,6,15,12];
    
    numbers.sort(function(a, b) {
      return b - a;
    });
    alert(`A resposta é: ${numbers}`);
}

//exercício4

function contarCarac() {
    var stringCarac = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

	document.getElementById("campoResposta").innerHTML = stringCarac.length;
} 