// 1. Crea una funziona che calcoli e ritorni la somma di due numeri interi. Se i due valori sono uguali, ritorna il triplo della somma.

function sum(x, y) {
  if (
    typeof x !== "number" ||
    typeof y !== "number" ||
    !Number.isInteger(x) ||
    !Number.isInteger(y)
  ) {
    throw new Error("I parametri devono essere numeri interi");
  }
  let sumNumber = x + y;
  if (x === y) {
    let sumNumber = sumNumber * 3;
  }
  return sumNumber;
}
console.log(sum(10, 13));

// 2. Crea una funzione che controlli sue numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

function check(x, y) {
  if (
    typeof x !== "number" ||
    typeof y !== "number" ||
    !Number.isInteger(x) ||
    !Number.isInteger(y)
  ) {
    throw new Error("I parametri devono essere numeri interi");
  }
  if (x === 50 || y === 50 || x + y === 50) {
    console.log(true);
  } else {
    console.log("nessuno dei due è 50 e la loro somma non è 50");
  }
}
check(50, 10);

// 3. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function removeCharAtPos(string, pos) {
  return string.slice(0, pos) + string.slice(pos + 1);
}
console.log(removeCharAtPos("Alessio", 3));

// 4. Crea una funzione che ritorni il valore più alto tra tre numeri interi.

function maxOfNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(maxOfNumber(10, 32, 45));

// 5. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

function check2(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(check2(34, 71));

// 6. Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. Sia la stringa che il numero devono essere passate come parametri.

function newString(str, num) {
  let elem = "";
  for (let i = 0; i < num; i++) {
    elem += str;
  }
  return elem;
}
console.log(newString("Ciao", 3));

// 7. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

function checkCity(str) {
  if (str.slice(0, 3) === "Los" || str.slice(0, 3) === "New") {
    return str;
  } else {
    return false;
  }
}
console.log(checkCity("Los Angeles"));

// 8. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi. L’array deve essere passato come parametro.

let arr = [3, 5, 10];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray(arr));

// 9. Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. Se li contiene, ritorna `true`, altrimenti ritorna `false`.

let arr2 = [4, 10];

function checkArray2(arr) {
  if (arr.includes(1) || arr.includes(3)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkArray2(arr2));

// 10. Crea una funzion che controlli che un array di due elementi NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

let arr3 = [6, 17];

function checkArray2(arr) {
  if (!arr.includes(1) || !arr.includes(3)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkArray2(arr3));

// 11. Crea una funzione per trovare la stringa più lunga in un array di stringhe. Pssa l’array come parametro e tritorna la strtinga più lunga.a

let arr4 = ["Ciao Mamma", "Precivitevolissimevolmente"];

function longestString(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    elem = arr[i];
    if (elem.length > longest.length) {
      longest = elem;
    }
  }
  return longest;
}
console.log(longestString(arr4));

// 12. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”

function checkAngle(gradi) {
  if (gradi < 90) {
    return "Angolo Acuto";
  } else if (gradi > 90 && gradi < 180) {
    return "Angolo Ottuso";
  } else if (gradi === 90) {
    return "Angolo Retto";
  } else if (gradi === 180) {
    return "Angolo Piatto";
  } else {
    return "Il Valore inserito non è valido";
  }
}
console.log(checkAngle(90));

// 13. Crea una funzione che trovi e ritorni **l’indice** del numero più alto in un array passato come parametro.

let arr5 = [45, 54, 8, 23, 109];

function IndexHighestNumber(arr) {
  let highest = arr[0];
  let highestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
      highestIndex = i;
    }
  }
  return { value: highest, index: highestIndex };
}
console.log(IndexHighestNumber(arr5));

// 14. Crea una funzione per trovare e ritornare il numero PARI più alto in un array di numeri passato come parametro.

function highestEvenNumber(arr) {
  let highest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] > highest) && (arr[i] % 2 === 0)) {
      highest = arr[i];
    }
  }
  return highest
}
console.log(highestEvenNumber(arr5));

// 15. Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo. Ritorna `true` se la condizione è applicata, `false` se non lo è.

function checkNumbers(first, second) {
  if ((first > 0 && second < 0) || (first < 0 && second > 0)) {
    console.log(true)
  } else {
    console.log(false)
  }
}
checkNumbers(-1, 4)


// 16. Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo. Se la stringa è più corta di tre caratteri, tutta la stringa deve essere in maiuscolo. La stringa originale deve essere passata come parametro.

function newString2(str) {
  if (str.length < 3) {
    console.log(str.toUpperCase()) 
  } else {
    let firstThree = str.slice(0, 3).toLowerCase()
    let elem = str.slice(3).toUpperCase()
    console.log(firstThree + elem)
  }
}
newString2("Ciao a tutti!")

// 17. Crea una funzione che calcoli la somma di due numeri passati come parametri. Se la loro somma è compresa tra 50 e 80, ritorna `65`, altrimenti ritorna `80`.

function sumNumber2(x, y) {
  const sum = x + y
  if (sum > 50 && sum < 80) {
    elem = 65
  } else {
    elem = 80
  }
  console.log(elem);
}
sumNumber2(3, 50)


// 18. Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri:
// Il numero è divisibile per 3 ⇒ ritorna “Diego”
// Il numero è divisibile per 5 ⇒ ritorna “Riccardo”
// Il numero è divisibile per 7 ⇒ ritorna “Stefano”
// Se il numero non ha 3, 5 o 7 come divisore, ritorna il numero originale.
// ⚠️ Se il numero è divisibile per più di una di queste opzioni, ritorna l’unione delle due stringhe. Es. 15 è divisibile per 3 e per 5, quindi il valore ritornato sarebbe “DiegoRiccardo”.

function convertNumber(num) {
  let elem = ""
  if (num % 3 === 0) {
    elem += "Diego"
  }
  if (num % 5 === 0) {
    elem += "Riccardo"
  }
  if (num % 7 === 0) {
    elem += "Stefano"
  }
  if (elem ==="") {
    elem = num.toString()
  }
  console.log(elem);
}
convertNumber(15)


// 19. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

function makeAcronym(str) {
  const words = str.split(" ")
  const firstLetter = words.map(function(elem) {
    return elem.charAt(0).toUpperCase()
  })
  const acronym = firstLetter.join("")
  console.log(acronym);
}

makeAcronym("Ciao Epicode, siamo a metà corso!")