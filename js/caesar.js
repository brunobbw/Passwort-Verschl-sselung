// CAESER FUNKTION

 //Funktion fürd Fehlermeldig falls mer de inputfeld leer laht und mer en button ahklickt
 function checkInput() {
    var input = document.querySelector('.input-field').value;
    
    if (input.trim() === '') {
      alert('Bitte Input ausfüllen');
    } else {
      encode(); // Aufruef vo encode-funktion und decode-funktion 
    }
  }
      //Funktion für  Dark/Light modus damit mer de hintegrund vom body uf schwarz/wiss ändere cha
      //Und demit sich  sicon entsprechend änderet
      function toggleDarkMode() {
    var body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  
    var icon = document.querySelector('#dark-mode-toggle .icon i');
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      body.style.backgroundColor = '#2b2b29'; // Hex-Wert fürd dark mode
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      body.style.backgroundColor = '#ffffff'; // Hex-Wert fürd light mode
    }
  }
  
  //Funktion fürd decode
      function decode() {
        var input = document.querySelector('.input-field').value;
        var output = '';
        var shift = 3; // Azahl vo Verschiebige bim encode/decode
  
        for (var i = 0; i < input.length; i++) {
          var charCode = input.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90) {
            output += String.fromCharCode(((charCode - 65 + 26 - shift) % 26) + 65); // grossbuechstabe
          } else if (charCode >= 97 && charCode <= 122) {
            output += String.fromCharCode(((charCode - 97 + 26 - shift) % 26) + 97); // chlibuechstabe
          } else {
            output += input.charAt(i); // nöd-alphabetische Zeiche 
          }
        }
  
        document.querySelector('#output').value = output;
      }
  
      function encode() {
        var input = document.querySelector('.input-field').value;
        var output = '';
        var shift = 3; // Number of shifts for encoding/decoding
      
        for (var i = 0; i < input.length; i++) {
          var charCode = input.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90) {
            output += String.fromCharCode(((charCode - 65 + shift) % 26) + 65); // Uppercase letters
          } else if (charCode >= 97 && charCode <= 122) {
            output += String.fromCharCode(((charCode - 97 + shift) % 26) + 97); // Lowercase letters
          } else {
            output += input.charAt(i); // Non-alphabetic characters
          }
        }
      
        document.querySelector('#output').value = output;
      }
      
  