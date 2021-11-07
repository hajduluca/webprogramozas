//b. (1 pont) Készíts egy random(a, b) függvényt, ami [a, b] zárt intervallumban állít elő egész számokat! Írj ki egy véletlen számot -10 és 10 között a konzolra!
function random(a, b){
    return Math.floor(Math.random() * (1 + Math.abs(a - b))) + a;
}

console.log(random(-10, 10));

//c. (1,5 pont) Tölts fel egy 20 elemű tömböt véletlen számokkal -5 és 5 között (határokat beleértve)! A feltöltött tömböt írd ki a konzolra!
let data = []
for(let i = 0; i < 20; i++){
    data.push(random(-5, 5));
}

console.log(data);

//d. (1,5 pont) Rajzold ki a tömb elemeit a vászonra a következőképpen. Húzz egy törtvonalat a vászon bal szélének közepétől a jobb szélének közepéig úgy, hogy a bal középső után menjen egy szakasz 10px-szel jobbra és a tömb 1. elemének megfelelően a vászon függőleges közepétől fel vagy le. A következő szakasz innen 10px-re jobbra és a tömb 2. elemének megfelelően a vászon függőleges közepétől fel vagy le, és így tovább.
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function draw(data){
    let x = 0
    let y = 105

    ctx.beginPath()
    ctx.moveTo(x,y)
    data.forEach(elem =>{
        x += 10
        y = 105 + elem
        ctx.lineTo(x,y)
        ctx.moveTo(x,y)
    })

    ctx.lineTo(x + 10, 105)
    ctx.closePath()

    //e. (1 pont) A vonal legyen 3px vastag és szürke.
    ctx.strokeStyle = 'grey'
    ctx.lineWidth = 3

    ctx.stroke()
}

draw(data)

//f. (1,5 pont) A "Change" gombra kattintva minden tömbelemhez adj hozzá egy véletlen számot -1 és 1 között (határokat beleértve), és egy vászontörlés után rajzold is ki az új tömbnek megfelelő állapotot!
function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for(let i = 0; i < data.length; i += 1){
        data[i] = data[i] + random(-1, 1)
    }
}

document.querySelector('#btn-change').addEventListener('click', (e) => {
    update()
    draw(data)
})

//g. (1,5 pont) A "Start animation" ikonra kattintva ezt tedd automatikussá és folyamatossá. Valamilyen időzítő segítségével (requestAnimationFrame (Linkek egy külső oldalra) vagy setInterval (Linkek egy külső oldalra)) mindig változtasd meg a tömbelemeket és törlés után rajzold is ki a vászonra a megváltozott tömböt!
document.querySelector('#btn-animation').addEventListener('click', () => {
    setInterval(() =>{
        update()
        draw(data)
    }, 25)
})
