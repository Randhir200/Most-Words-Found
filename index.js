var mostWordsFound = function(sentences) {
    let c=1;
    let nc=1;
  for(let i=0;i<sentences.length;i++){
      for(const j of sentences[i]){
          if(j==" "){
             c=c+1; 
          }
      }
      if(c>nc){
          nc=c;
          c=1;
      }else{
          c=1;
      }
  } 
    return nc;
};

sentences = ["please wait", "continue to fight", "continue to win"];

console.log(mostWordsFound(sentences))

