const txtNumbers = document.querySelector('#numbers')
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

//a. (1 pont) A numbers azonosítójú szöveges beviteli mezőbe lehet beírni a számsorozatot, a számokat vessző választja el. Gépelés közben (input esemény) olvasd be a szöveges beviteli mező értékét, és vessző szerint bontsd fel tömbbé. Az így kapott tömböt írd ki a konzolra!
//console.log('[',txtNumbers.value,']');
let array = Array.from(Array(txtNumbers).keys());
console.log(array);

//b. (1 pont) A tömb minden eleme egyelőre szövegként megadott szám. Alakítsd át a tömb elemeit számmá, és írd ki a konzolra! Az így kapott számtömbön oldd meg az alábbi 5 feladatot (c.-g.). Ha az átalakítást nem tudtad elvégezni, akkor használhatsz fixen beégetett tömböt is a megoldáshoz.
