let vadlottak = [
    {
        nev: 'Nabor Purple',
        sikkasztas: 1200530,
        buntetes: 5
    },
    {
        nev: 'Patrick Router',
        sikkasztas: 1200420,
        buntetes: 5
    },
    {
        nev: 'Aaron Treihoard',
        sikkasztas: 1200128,
        buntetes: 5
    },
    {
        nev: 'Heinrich Studius',
        sikkasztas: 1200803,
        buntetes: 5
    },
    {
        nev: 'Myriam Church',
        sikkasztas: 1180526,
        buntetes: 5
    },
    {
        nev: 'Erick Spkult',
        sikkasztas: 1190923,
        buntetes: 5
    },
    {
        nev: 'Catherine Fügi',
        sikkasztas: 1200813,
        buntetes: 5
    },
    {
        nev: 'Thomas Fury',
        sikkasztas: 1181008,
        buntetes: 5
    },
    {
        nev: 'Victoria Secret',
        sikkasztas: 1200608,
        buntetes: 5
    },
    {
        nev: 'Victor General',
        sikkasztas: 1190930,
        buntetes: 5
    }
]

//Delegálás
function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo);
}


let tablazat = document.querySelector('table');

let ujSor = document.createElement('tr');
    let ujCella = document.createElement('th');
        ujCella.innerHTML = 'Név';
    ujSor.appendChild(ujCella);

    ujCella = document.createElement('th');
        ujCella.innerHTML = 'Sikkasztott összeg';
    ujSor.appendChild(ujCella);

    ujCella = document.createElement('th');
        ujCella.innerHTML = 'Büntetés';
    ujSor.appendChild(ujCella);
tablazat.appendChild(ujSor)

let i = 0;
for(const vadlott of vadlottak){
    ujSor = document.createElement('tr');
        ujSor.dataset.index = i; //vagy ujSor.dataset.index = indexof(elitelt), de ezt nem vettük
        i++;

        ujCella = document.createElement('td');
            ujCella.innerHTML = vadlott.nev;
        ujSor.appendChild(ujCella);

        ujCella = document.createElement('td');
            ujCella.innerHTML = vadlott.sikkasztas;
        ujSor.appendChild(ujCella);

        ujSor.appendChild(ujCella); ujCella = document.createElement('td');
            ujCella.innerHTML = vadlott.buntetes;
            ujCella.classList.add('buntetes');
        ujSor.appendChild(ujCella);

    tablazat.appendChild(ujSor);
}

//Kijelölés
delegal(tablazat, 'tr', 'click', (esemeny, elem)=>{
    elem.classList.toggle('kijelolve');
});

//Összegzés
let osszegGomb = document.querySelector('#osszeg-gomb');
let osszegMezo = document.querySelector('#osszeg-mezo');
osszegGomb.addEventListener('click', ()=>{
    let kijeloltek = document.querySelectorAll('.kijelolve');
    let osszeg = 0;
    for(const kijelolt of kijeloltek){
        let i = kijelolt.dataset.index;
        osszeg += vadlottak[i].sikkasztas;
    }
    osszegMezo.innerHTML = `Össz sikkasztás: ${osszeg}`;
});

// csökkentés/növelés
let csokkentGomb = document.querySelector('#csokkent-gomb');
csokkentGomb.addEventListener('click', ()=>{
    let kijeloltek = document.querySelectorAll('.kijelolve');
    for(const kijelolt of kijeloltek){
        let i = kijelolt.dataset.index;
        if(vadlottak[i].buntetes > 1){
            vadlottak[i].buntetes--;
            kijelolt.querySelector('.buntetes').innerHTML = vadlottak[i].buntetes;
        }
    }
});

let novelGomb = document.querySelector('#novel-gomb');
novelGomb.addEventListener('click', ()=>{
    let kijeloltek = document.querySelectorAll('.kijelolve');
    for(const kijelolt of kijeloltek){
        let i = kijelolt.dataset.index;
        vadlottak[i].buntetes++;
        kijelolt.querySelector('.buntetes').innerHTML = vadlottak[i].buntetes;
    }
});

//Több?
let tobbGomb = document.querySelector('#tobb-gomb');
let tobbInput = document.querySelector('#tobb-input');
tobbGomb.addEventListener('click', ()=>{
    let sorok = document.querySelectorAll('tr');
    let penz = parseInt(tobbInput.value);
    for(let s = 1; s < sorok.length; s++){
        let i = sorok[s].dataset.index;
        sorok[s].classList.remove('vastag');
        if(vadlottak[i].sikkasztas > penz){
            sorok[s].classList.add('vastag');
        }
    }
});
