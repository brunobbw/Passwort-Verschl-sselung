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

      function encode() {
        // Hol de Input mit de ID
        const inputText = document.getElementById('inputText').value;
        let outputText = '';
      
        for (let i = 0; i < inputText.length; i++) {
          const currentChar = inputText[i];
          // Tuen bim substitutionMap nachluege welle zu welle passt
          const substitution = substitutionMap[currentChar.toUpperCase()] || currentChar;
          outputText += substitution;
        }
      
        // Tuen de value mit de ID setze
        document.getElementById('output').value = outputText;
      }
      
      function decode() {
        // Hol de Input mit de ID
        const inputText = document.getElementById('inputText').value;
        let outputText = '';

        for (let i = 0; i < inputText.length; i++) {
          const currentChar = inputText[i];
          let substitution = '';
      
          for (const key in substitutionMap) {
            // Lueg ob de substitutionKey de gliche wert het wie de Input
            if (substitutionMap.hasOwnProperty(key) && substitutionMap[key].toUpperCase() === currentChar.toUpperCase()) {
              // Tuens zrucksetze
              substitution = key;
              break;
            }
          }
      
          // Tuens in lowercase zruck geh
          outputText += substitution.toLowerCase() || currentChar;
        }
      
        // Tuen de value vom HTML text mit de ID setze und usgeh
        document.getElementById('output').value = outputText;
      }
      