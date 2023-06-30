 //Funktion fürd Fehlermeldig falls mer de inputfeld leer laht und mer en button ahklickt
 function checkInput() {
    let input = document.querySelector('.input-field').value;
    
    if (input.trim() === '') {
      alert('Bitte Input ausfüllen');
    } else {
      subEncode(); // Aufruef vo encode-funktion und decode-funktion 
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
      
  // Substitution Function
  
  const substitutionMap = {
      A: 'Q',
      B: 'W',
      C: 'E',
      D: 'R',
      E: 'T',
      F: 'Y',
      G: 'U',
      H: 'I',
      I: 'O',
      J: 'P',
      K: 'A',
      L: 'S',
      M: 'D',
      N: 'F',
      O: 'G',
      P: 'H',
      Q: 'J',
      R: 'K',
      S: 'L',
      T: 'Z',
      U: 'X',
      V: 'C',
      W: 'V',
      X: 'B',
      Y: 'N',
      Z: 'M'
    };
    
    function subEncode() {
      const inputText = document.getElementById('inputText').value;
      let outputText = '';
    
      for (let i = 0; i < inputText.length; i++) {
        const currentChar = inputText[i];
        const substitution = substitutionMap[currentChar.toUpperCase()] || currentChar;
        outputText += substitution;
      }
    
      document.getElementById('output').value = outputText;
    }
    
    function subDecode() {
        const inputText = document.getElementById('inputText').value;
        let outputText = '';
      
        for (let i = 0; i < inputText.length; i++) {
          const currentChar = inputText[i];
          let substitution = '';
      
          for (const key in substitutionMap) {
            if (substitutionMap.hasOwnProperty(key) && substitutionMap[key].toUpperCase() === currentChar.toUpperCase()) {
              substitution = key;
              break;
            }
          }
      
          outputText += substitution.toLowerCase() || currentChar;
        }
      
        document.getElementById('output').value = outputText;
      }
  