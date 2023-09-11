// Codewars for class 31 9.11.23

function duplicateEncode(word){
    word = word.toLowerCase();
      let result = ""
      for (let i = 0; i < word.length; i++){
        if (word.indexOf(word[i]) === word.lastIndexOf(word[i])){
          results += "("
        }else{
          results += ")"
        }
      } return result;
    }