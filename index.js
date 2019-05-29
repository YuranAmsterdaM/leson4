//1------------------------------------------
function multiply(a, b){
  a * b ;
    const c = a * b ;
    return c;
}

/*/2-Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" */

function DNAStrand(dna) {
   var result = '';
   
   for(var i=0; i < dna.length; i++) {
      if(dna[i] == 'A') {
        result = result + 'T';
      } else if(dna[i] == 'G') {
        result = result + 'C';
      } else if(dna[i] == 'T') {
        result = result + 'A';
      } else {
        result = result + 'G';
      } 
   }
  return result;
}
/*/3-You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect*/

function findNextSquare(sq) {
  var n = Math.sqrt(sq);
    if(n == Math.trunc(n)) {
      ++n;
      return n * n;
    }
  return -1;
}
/*/4--Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

function longest(s1, s2) {
  var s = s1 + s2;
  
  return s.split('').filter(function(item, pos, self) {
      return pos == self.indexOf(item);
  }).sort().join('');
}
/*/5--You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. */

function getMiddle(s)
{
 var l = s.length;
  return s.substr(~~((l-1) / 2), (l % 2 == 0)? 2: 1);
}