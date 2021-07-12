const getButton = document.getElementById("criar-carta");
const getParagraph = document.getElementById("carta-gerada");
const getInput = document.getElementById("carta-texto");

function verifyInput(){
    // Condição retirada do Stack Overflow https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
    if(getInput.value.match(/^(\s)+$/)){
        return true;

}
}

function makeLetter(){
    
    getButton.addEventListener("click", function(event){
        if(!getInput.value){
            getParagraph.innerText ="Por favor, digite o conteúdo da carta."
        } else if( verifyInput()=== true ){
            getParagraph.innerText ="Por favor, digite o conteúdo da carta."
        }
        else{
       
        let array = getInput.value.split(" ");
        for(let index=0;index<array.length; index+=1){
            let makeSpan = document.createElement("span");
            makeSpan.innerHTML  = array[index];
            getParagraph.appendChild(makeSpan);
        }
       
        
        }
    })

}
makeLetter();