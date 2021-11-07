const tarea  = document.querySelector('#haiku-editor');
const noc    = document.querySelector('#number-of-characters');
const nor = document.querySelector('#number-of-rows');
const vpr = document.querySelector('#vowels-per-row');
const magánhangzok = 'aáeéiíoóöőuúüű';
const p = tarea.parentNode;
const gomb = p.querySelector('button');
const haikuk = document.querySelector('#haikus');


function maganhangzokSzama(sor){
    let mgh = 0;
    for(const betu of sor){
        if(magánhangzok.includes(betu)){
            mgh++;
        }
    }
    return mgh;
}

tarea.addEventListener('input', ()=>{
    
    //b feladat: (1 pont) A szöveges beviteli mezőbe gépelve írd ki a mező tartalmát a konzolra! Használd az input eseményt!
    console.log(tarea.value);

    //c feladat: (1 pont) A szerkesztőben gépelve a number-of-characters azonosítójú elembe írd ki a szerkesztőben lévő karakterek számát!)
    noc.innerHTML = tarea.value.length;

    //d. (1 pont) A szerkesztőben gépelve a number-of-rows azonosítójú elembe írd ki a szerkesztőben lévő sorok számát (amiket \n jel választ el egymástól)!
    nor.innerHTML = tarea.value.split('\n').length;

    //e. (1 pont) A szerkesztőben gépelve írd ki a konzolra az első sorban lévő magánhangzók számát! Segítségképpen a magyar nyelv magánhangzói: aáeéiíoóöőuúüű.
    console.log('e feladat: ', maganhangzokSzama(tarea.value.split('\n')[0]));

    //f. (1,5 pont) A vowels-per-row azonosítójú listában sorold fel, hogy soronként hány magánhangzó szerepel!
    vpr.innerHTML = '';
    for(const sor of tarea.value.split('\n')){
        let li = document.createElement('li');
            li.innerHTML = maganhangzokSzama(sor);
            vpr.appendChild(li);
    }

    //g. (1,5 pont) Ha 3 sor van, és soronként 5-7-5 szótagszám, akkor add a szöveges beviteli mezőt tartalmazó p elemnek a haiku stílusosztályt. Ekkor zöldre vált a háttér, és megjelenik egy gomb. Ha a feltétel nem teljesül, akkor ne legyen rajta ez a stílusosztály!
    if(
        tarea.value.split('\n').length == 3 &&
        maganhangzokSzama(tarea.value.split('\n')[0]) == 5 &&
        maganhangzokSzama(tarea.value.split('\n')[1]) == 7 &&
        maganhangzokSzama(tarea.value.split('\n')[2]) == 5
    ){
        p.classList.add('haiku');
    }else{
        p.classList.remove('haiku');
    }
});

    //h. (1 pont) Ha jól alkalmaztad a stílusosztályt, akkor haiku sorában megjelent egy gomb. Erre kattintva a szerkesztő tartalmát add hozzá a haikus azonosítójú elemhez <pre> elemek között (ld. az oldalon lévő példákat)!
    gomb.addEventListener('click', ()=>{
        let pre = document.createElement('pre');
            pre.innerHTML = tarea.value;
            haikuk.appendChild(pre);
    });
