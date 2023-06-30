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
    Z: 'M',
    a: 'q',
    b: 'w',
    c: 'e',
    d: 'r',
    e: 't',
    f: 'y',
    g: 'u',
    h: 'i',
    i: 'o',
    j: 'p',
    k: 'a',
    l: 's',
    m: 'd',
    n: 'f',
    o: 'g',
    p: 'h',
    q: 'j',
    r: 'k',
    s: 'l',
    t: 'z',
    u: 'x',
    v: 'c',
    w: 'v',
    x: 'b',
    y: 'n',
    z: 'm'
  };
  
  function subEncode() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let outputText = '';
  
    for (let i = 0; i < inputText.length; i++) {
      const currentChar = inputText[i];
      const substitution = substitutionMap[currentChar] || currentChar;
      outputText += substitution;
    }
  
    document.getElementById('output').value = outputText;
  }
  
  function subDecode() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let outputText = '';
  
    for (let i = 0; i < inputText.length; i++) {
      const currentChar = inputText[i];
      let substitution = '';
  
      for (const key in substitutionMap) {
        if (substitutionMap.hasOwnProperty(key) && substitutionMap[key] === currentChar) {
          substitution = key;
          break;
        }
      }
  
      outputText += substitution || currentChar;
    }
  
    document.getElementById('output').value = outputText;
  }
  

////// XOR FUNCTION

function xorDecode() {
    // Hol wasimmer im inputText ine gschribe worde isch
    const inputText = document.getElementById("inputText").value;
  
    // De text mit de xorCipher funktion decode
    const decodedText = xorCipher(inputText);
  
    // Tuen de decodete Text im output feld zeige
    document.getElementById("output").value = decodedText;
  }
  
  function xorEncode() {
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
  
  