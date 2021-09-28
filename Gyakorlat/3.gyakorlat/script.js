const allatkert = [
    {
        nev: 'Vilmos',
        faj: 'medve',
        latogatok: 5
    },
    {
        nev: 'Gergo',
        faj: 'mókus',
        latogatok: 15
    },
    {
        nev: 'Timi',
        faj: 'hörcsög',
        latogatok: 1
    }
]
/*
let main = document.querySelector('#main')

for(const allat of allatkert) {
    let p = document.createElement('p')
    p.innerHTML = `${allat.nev} ${allat.faj} <span class="${allat.nev} ">${allat.latogatok} </span>`
    
    let buttonp = document.createElement('button')
    buttonp.innerHTML = '+'
    buttonp.addEventListener('click', (event)=>{
        let num = document.querySelector(`.${allat.nev} `)
        if(parseInt(num.innerHTML) < 20){
            num.innerHTML = parseInt(num.innerHTML) + 1
        }
    })
    
    let buttonm = document.createElement('button')
    buttonm.innerHTML = '-' 
    buttonm.addEventListener('click', (event)=>{
        let num = document.querySelector(`.${allat.nev} `)
        if(!parseInt(num.innerHTML) == 0){
            num.innerHTML = parseInt(num.innerHTML) - 1
        }
    })
    p.appendChild(buttonp)
    p.appendChild(buttonm)
    main.appendChild(p)
}
*/
/*
function click(event){
    console.log('almafa')
    a.removeEventListener('click', click)
    //event.target.removeEventListener('click')
}

let a = document.createElement('p')

a.innerHTML = 'én egy gomb vagyok'

a.addEventListener('click', click)

document.querySelector('#main').appendChild(a)
*/

/*
Érdemes átnézni a ZH előtt

'click'

'input'

'button'
*/

function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresztElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresztElem)){
            mit(esemeny,legkozelebbiKeresztElem);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo)
}


function click(event){
    if(event.target.classList.contains('selected')){
        event.target.classList.remove('selected')
    }else {
        event.target.classList.add('selected')
    }
}


const adatok = [
    'Etyek',
    'Érd',
    'III.Kerület',
    'Margit-sziget',
    'Normafa',
    'Pusztafalu',
    'XI.kerület',
]
let ul = document.querySelector('#main')

for(const elem of adatok){
    let li = document.createElement('li')
    li.innerHTML = elem
    li.dataset.og = elem 
    li.dataset.color = elem
    ul.appendChild(li)
}

delegal(ul, 'li', 'click', click)

document.querySelector('#rename').addEventListener('click', ()=>{
    let newname = document.querySelector('#newname')
    document.querySelectorAll('.selected').forEach(elem => elem.innerText = newname.value)
})

document.querySelector('#reset').addEventListener('click', ()=>{
    document.querySelectorAll('.selected').forEach(elem => {
        elem.innerText = elem.dataset.og
        elem.style.color = 'black'
    })
})

document.querySelector('#recolor').addEventListener('click', ()=>{
    let newname = document.querySelector('#newcolor')
    let color = 'black'
    switch(newname.value) {
        case 'zöld':
            color = 'green'
        break;
        case 'piros':
            color = 'red'
        break;
        case 'kék':
            color = 'blue'
        break;
    }
    document.querySelectorAll('.selected').forEach(elem => elem.style.color = color)
})