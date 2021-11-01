const szavak = [
    "triviális",
    "Turcsányi",
    "Professzor",
    "Tenet",
    "Bosszúállók"
]

let jatekter = document.querySelector('#jatekter')
let eletek = document.querySelector('#eletek')
let eredmeny = document.querySelector('#eredmeny')
let ujjatek = document.querySelector('#ujjatek')

let tippek = []

let maxelet = 10        //max élet változó életek száma

function start(jatekter, eletek, maxelet, eredmeny){
    jatekter.innerHTML = ''
    eletek.innerHTML = `${maxelet} / <span id="aktualis">${maxelet}</span>`
    let szo = szavak[Math.floor(Math.random() * szavak.length)]
    
    for(let betu of szo){
        let span = document.createElement('span')
        span.dataset.betu = betu.toLowerCase()
        span.classList.add('betu')
        jatekter.appendChild(span)
    }
    eredmeny.innerHTML = ''
}

function gameOver(){
    let vege = true
    document.querySelectorAll('#jatekter span').forEach(elem =>{
        if(elem.innerHTML == '') vege = false
    })
    if(parseInt(document.querySelector('#aktualis').innerHTML) == 0) vege = true
    return vege 
}

function winlose(){
    if(parseInt(document.querySelector('#aktualis').innerHTML) == 0) return 'lose'
    return 'win'
}


ujjatek.addEventListener('click', ()=>{
    start(jatekter, eredmeny, maxelet)
})

document.addEventListener('keydown', (event)=>{
    if(!gameOver()){
        let betu = event.key.toLowerCase()
        let akt = document.querySelector('#aktualis')
        let hibatlan = false
        document.querySelectorAll('#jatekter span').forEach(element =>{
            if(betu == element.dataset.betu){
                element.innerHTML = betu
                hibatlan = true
            }
        })
        if(!hibatlan){
            akt.innerHTML = parseInt(akt.innerHTML) - 1
        }
    }
    else{
        if(winlose() == 'win'){
            eredmeny.innerHTML = 'Nyertél'
        }else{
            eredmeny.innerHTML = 'Fel lettél akasztva!'
        }
    }
})

start(jatekter, eletek, maxelet, eredmeny)