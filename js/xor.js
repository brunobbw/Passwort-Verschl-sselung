 //Funktion fürd Fehlermeldig falls mer de inputfeld leer laht und mer en button ahklickt
 function checkInput() {
    let input = document.querySelector('.input-field').value;
    
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
      
////// XOR FUNCTION

function decode() {
    // Hol wasimmer im inputText ine gschribe worde isch
    const inputText = document.getElementById("inputText").value;
  
    // De text mit de xorCipher funktion decode
    const decodedText = xorCipher(inputText);
  
    // Tuen de decodete Text im output feld zeige
    document.getElementById("output").value = decodedText;
  }
  
  function encode() {
    // Hol wasimmer im inputText ine gschribe worde isch
    const inputText = document.getElementById("inputText").value;
  
    // De text mit de xorCipher funktion encode
    const encodedText = xorCipher(inputText);
  
    // Tuen de encodete Text im output feld zeige
    document.getElementById("output").value = encodedText;
  }
  
  function xorCipher(text) {
    const key = "KEY";
  
    let encodedText = "";
  
    for (let i = 0; i < text.length; i++) {

      // Tuen die Operation zwüsche de Zeichecode vom Text und de des entsprechende Zeichens im Schlüssel usführe
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
  
      // zruck in ein Zeiche converte
      encodedText += String.fromCharCode(charCode);
    }
  
    // Tuen de Text zrug geh
    return encodedText;
  }