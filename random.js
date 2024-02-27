const word = document.getElementById("word");
const btn = document.getElementById("btn");

let listword=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

btn.addEventListener('click',function(){
  let words = 'Random Word is ';
  for(i=0;i<6;i++){
    words += randWord();
  }
    word.innerHTML=words;
});

function randWord(){
  let randindex = Math.floor(Math.random()*26);
  return listword[randindex];
}
