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

let dataQuery = document.querySelector('#adatok ul'); 

function zold(event,elem){
    elem.classList.toggle('termek');
}

function bold(event,elem){
    let szallitmany = elem.closest('.szallitmany');
    if(elem.innerHTML.startsWith('É')) szallitmany.classList.toggle('erkezes'); 
    if(elem.innerHTML.startsWith('P')) szallitmany.classList.toggle('polc');
}

delegal(dataQuery,'.szallitmany ul li','click',zold);
delegal(dataQuery,'.szallitmany div','click',bold);