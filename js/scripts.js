$(document).ready(function() {
  const sentence = prompt("Write a sentence for me :");
    console.log(sentence);
  
    function firstLast() {
      const first = sentence.charAt(0);
      const last = sentence.charAt(sentence.length-1);
      const flLetters = (first + last).toUpperCase();
      alert (flLetters);
      }
    function invert() {
      const first = sentence.charAt(0);
      const last = sentence.charAt(sentence.length-1);
      const lfLetters = (last + first).toUpperCase();
      alert(lfLetters);
    }
    firstLast();
    invert();
  }); 