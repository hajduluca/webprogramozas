const legiok = [
    {
        legatus: 'Nadius Sucus',
        nev: 'Legio I. Debrencia',
        vesztesegek: [163,150,185,134,240]
    },
    {
        legatus: 'Patricio Aela',
        nev: 'Legio II. Veefia',
        vesztesegek: [195,161,202,109,215]
    },
    {
        legatus: 'Auron Franca',
        nev: 'Legio III. Britannia',
        vesztesegek: [970,785,1402,697,746]
    },
    {
        legatus: 'Heiret Hosuk',
        nev: 'Legio IV. Nikonia',
        vesztesegek: [145,242,197,143,214]
    },
    {
        legatus: 'Maera Laiukus',
        nev: 'Legio V. Aelbfalvia',
        vesztesegek: [241,203,115,435,392]
    },
    {
        legatus: 'Aeirich Sciki',
        nev: 'Legio VI. Java',
        vesztesegek: [147,241,139,183,297]
    },
    {
        legatus: 'Kataen Iosa',
        nev: 'Legio VII. Beiira',
        vesztesegek: [175,187,248,148,278]
    },
    {
        legatus: 'Tomolus Bucsii',
        nev: 'Legio VIII. Gaia',
        vesztesegek: [418,428,491,462,570]
    },
    {
        legatus: 'Victorion Bougun',
        nev: 'Legio IX. Sopruina',
        vesztesegek: [153,158,176,134,107]
    },
    {
        legatus: 'Vittorio Gerlei',
        nev: 'Legio X. Altlania',
        vesztesegek: [1670,290,178,185,404]
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
let csapatIndex = 0;
for(const legio of legiok){
    let ujSor = document.createElement('tr');
        ujSor.dataset.csapatIndex = csapatIndex;
        csapatIndex++;

        let ujCella = document.createElement('td');
            ujCella.innerHTML = legio.legatus;
        ujSor.appendChild(ujCella);

        for(const meccs of csapat.meccsek){
            ujCella = document.createElement('td');
                ujCella.innerHTML = meccs;
                ujCella.classList.add('legio');
            ujSor.appendChild(ujCella);
        }

        ujCella = document.createElement('td');
            ujCella.innerHTML = csapat.orszag;
            ujSor.appendChild(ujCella);

    tablazat.appendChild(ujSor);
}

//Kijelölés
delegal(tablazat, 'tr', 'click', (esemeny, elem)=>{
    elem.classList.toggle('kijelolve');
});
/*
// ÖSSZEG
let osszegGomb = document.querySelector('#ossz-gomb');
let osszegDiv = document.querySelector('#ossz-div');
osszegGomb.addEventListener('click', ()=>{
    let kijeloltek = document.querySelectorAll('.kijelolve');
    let vereseg = 0;
    let dontetlen = 0;
    let gyozelem = 0;
    for(const kijelolt of kijeloltek){
        let i = parseInt(kijelolt.dataset.csapatIndex);
        for(const meccs of csapatok[i].meccsek){
            switch(meccs){
                case 3: gyozelem++; break;
                case 1: dontetlen++; break;
                case 0: vereseg++; break;
                default: console.log('Hajrá Fradi!');
            }
        }
    }
    osszegDiv.innerHTML = `GY: ${gyozelem} | D: ${dontetlen} | V: ${vereseg}`;
    if(kijeloltek.length == 1) osszegDiv.innerHTML += ` | Átag: ${(gyozelem*3 + dontetlen)/6}`;
});

//Csere
let csereGomb = document.querySelector('#csere-gomb');
csereGomb.addEventListener('click', ()=>{
    let kijeloltek = document.querySelectorAll('.kijelolve');
    for(const kijelolt of kijeloltek){
        let csapatIndex = parseInt(kijelolt.dataset.csapatIndex);
        let cellak = kijelolt.querySelectorAll('.meccs');
        for(let i = 0; i < 6; i++){
            if(csapatok[csapatIndex].meccsek[i] == 3){
                csapatok[csapatIndex].meccsek[i] = 0;
            }else if(csapatok[csapatIndex].meccsek[i] == 0){
                csapatok[csapatIndex].meccsek[i] = 3;
            }
            cellak[i].innerHTML = csapatok[csapatIndex].meccsek[i];
        }
    }
});

// Lista
let listaInput = document.querySelector('#lista-input');
let listaGomb = document.querySelector('#lista-gomb');
let lista = document.querySelector('ul');
listaGomb.addEventListener('click', ()=>{
    let kijeloltek = document.querySelectorAll('.kijelolve');
    lista.innerHTML = '';
    for(const kijelolt of kijeloltek){
        let csapatIndex = parseInt(kijelolt.dataset.csapatIndex);
        
        if(csapatok[csapatIndex].orszag == listaInput.value){
            lista.innerHTML += `<li>${csapatok[csapatIndex].nev}</li>`;
        }
    }
});

*/