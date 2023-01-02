const btn = document.getElementsByTagName("button")[0]
const wordTag = document.getElementsByClassName("words-list")[0]
const pronunciationTag = document.getElementsByClassName("pronunciation-list")[0]
const imageTag = document.getElementsByTagName("img")[0]


if(!imageTag.hasAttribute("src")){
   imageTag.getAttribute("display","none")
}

function onClickSearch(){
   if(wordTag.hasChildNodes()){
      for(let i = 0; i < wordTag.childElementCount; i++){
         wordTag.removeChild(wordTag.children[i])
      }
   }
   if(pronunciationTag.hasChildNodes()){
      for(let i = 0; i < pronunciationTag.childElementCount; i++){
         pronunciationTag.removeChild(pronunciationTag.children[i])
      }
   }
}

const options = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
   }
};

function getSynonyms(word){
   fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`, options)
   .then(response => response.json())
   .catch(err => console.error(err))
   .then(
      (words) =>  {
         for(let word of words.synonyms){
            const node = document.createElement("li");
            const textnode = document.createTextNode(`${word}`);
            node.appendChild(textnode);
            wordTag.appendChild(node)
         }
      }
   )
}
function getPronunciation(word){
   fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/pronunciation`, options)
   .then(response => response.json())
   .catch(err => console.error(err))
   .then(
      (words) => {
         pro = ''
         for(let word of words.pronunciation.all){
            pro += word
         }
         const node = document.createElement("li");
         const textnode = document.createTextNode(`${pro}`);
         node.appendChild(textnode);
         pronunciationTag.appendChild(node)
      }
   )
}
   const options_img = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '',
         'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
      }
   };
function getImage(word){
   fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${word}&count=1`, options_img)
      .then(response => response.json())
      .catch(err => console.error(err))
      .then((imgInfo) =>{
         imageTag.getAttribute("display","none")
         imageTag.setAttribute("src",imgInfo.value[0].contentUrl)
      }
   )
}


btn.addEventListener("click", function(){
   const word = document.getElementsByTagName("input")[0].value
   onClickSearch()
   getPronunciation(word)
   getSynonyms(word)
   getImage(word)
})
