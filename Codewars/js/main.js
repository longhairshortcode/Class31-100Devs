// Codewars for class 31 9.11.23

//task: The goal of this exercise is to convert a string to a new string where 
//each character in the new string is "(" if that character appears only once 
//in the original string, or ")" if that character appears more than once in the
// original string. Ignore capitalization when determining if a character is a 
//duplicate.

// my answer
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

// another person's answer that I get now:

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

  // my version of above person's 

  function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map((char, i, origArr) => {
      if(origArr.indexOf(char) === origArr.lastIndexOf(char)){
        return "(";
      }else{
        return ")";
      }
    }) 
      .join('');
    }

#####################################################################################################


// Codewars for class 31 9.12.23

//task: 
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"


// my answer

    function printerError(s) {
        let errors = s.split('').filter(char => char > "m").length
        return `${errors}/${s.length}`
        }

// someones else' code that I learned and now get:

let printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}` 



#####################################################################################################


// Codewars for class 31 9.14.23


// task: 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

//my code:

function countSheeps(sheep) {
  let total = 0
  total = sheep.filter(sheep => sheep === true).length 
  return total;
  }


  #####################################################################################################

  //task

  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


  //my code:

  const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd"




  #####################################################################################################

  //task
  Complete the solution so that the function will break up camel casing, using a space between words.

  Example
  "camelCasing"  =>  "camel Casing"
  "identifier"   =>  "identifier"
  ""             =>  ""


  //mycode:

  // complete the function
function solution(string){
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');
 
}