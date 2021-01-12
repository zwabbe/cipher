


//This tells the script to load when the page loads so there are no errors
$(document).ready(function() {
  const sentence = prompt("Write a sentence for me :");
    console.log(sentence);

    //This makes a function that takes the first and last character of the input by user and uppcases them 
    function firstLast() {
      const first = sentence.charAt(0);
      const last = sentence.charAt(sentence.length-1);
      const flLetters = (first + last).toUpperCase();
      alert (flLetters);
      }

    //second function that takes the first character and the last character of the user input and makes them uppercase while flipping them 
    function invert() {
      const first = sentence.charAt(0);
      const last = sentence.charAt(sentence.length-1);
      const lfLetters = (last + first).toUpperCase();
      alert(lfLetters);
    }

    // This executes the two functions we have created. 
    firstLast();
    invert();
  }); 