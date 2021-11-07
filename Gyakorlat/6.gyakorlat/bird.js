const canvas = document.querySelector('#game')
const ctx = canvas.getContext('2d')

const bird = {
    x: 50, 
    y: canvas.height / 2,
    width: 30,
    height: 50,
    vy: 0,        //sebessége a madárnak
    ay: 250
}

const columns = []      //oszlopok
const GAP = 150     
const COLUMN_DISTANCE = 300     //oszlopok közötti távolság
const COLUMN_VELOCITY = -200        //200-al (sebesség) közeledjenek az oszlopok

let score = 0;
let gameState = 0   //játékban vagyunk

const images = {
    bird: new Image(),
    sky: new Image(),
    columns: new Image()
}

//HELP
function random(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function isCollided(a, b){
    return !(b.y + b.height < a.y || a.x + a.width < b.x || a.y + a.height < b.y || b.x + b.width < a.x)
}

function newColumn(){
    const h = random(10, canvas.height / 2)

    columns.push(
    {
        x: canvas.height,
        y: 0,
        width: 30,
        height: h
    },
    {
        x: canvas.width,
        y: h + GAP,
        width: 30,
        height: canvas.height - GAP - h
    })
}

//rajzfunkció létrehozása
function draw(){
    ctx.fillStyle = 'lightblue'
    //ctx.fillRect(0, 0, 600, 400)        //(10:x, 10:y koordinátáról indul, ahol 20x50-es negyzetet akarok rajzolni)
    ctx.drawImage(images.sky, 0, 0, 600, 400)

    /*
    //Útak rajzolása
    ctx.strokeStyle = 'red'
    ctx.beginPath()
    ctx.moveTo(20,30)
    ctx.lineTo(50,60)

    //ctx.moveTo(50,60)
    //ctx.lineTo(80,30)
    ctx.closePath()     //lezárom az úta
    ctx.stroke()
    */

    ctx.fillStyle = 'yellow'
    //ctx.fillRect(bird.x, bird.y, bird.height, bird.width)
    ctx.drawImage(images.bird, bird.x, bird.y, bird.height, bird.width)

    ctx.fillStyle = 'darkgrey'
    //columns.forEach(columns => ctx.fillRect(columns.x, columns.y, columns.width, columns.height))
    columns.forEach(columns => ctx.drawImage(images.columns, columns.x, columns.y, columns.width, columns.height))

    if(gameState){
        dye.play();
        ctx.fillStyle = 'red'
        ctx.font = '100px serif'
        ctx.fillText('GAME OVER', 10, 200)
    }

    ctx.fillStyle = "#000";  
    ctx.font = "20px Verdana";  
    ctx.fillText("Score : "+score,10,canvas.height-20);  

}

function update(dt){
    bird.vy += bird.ay * dt
    bird.y += bird.vy * dt

    //New Columns
    const lastColumn = columns[columns.length - 1]
    if(columns.length === 0 || lastColumn.x < canvas.width - COLUMN_DISTANCE){
        newColumn()
    }
    //Remove Columns
    const firstColumn = columns[0]
    if(firstColumn.x < -firstColumn.width){
        columns.shift()
        columns.shift()
    }
    //Move Columns
    columns.forEach(columns =>{ 
        columns.x += COLUMN_VELOCITY * dt
        if(isCollided(bird, columns)){
            gameState = 1;
        }else{
            score++;
        }
    })
}

let prevTime = performance.now()

function gameLoop(now = performance.now()){
    const dt = (now - prevTime) / 1000;     //kiválasztok egy time-ot
    prevTime = now;

    update(dt)
    draw()

    if(!gameState){
        requestAnimationFrame(gameLoop)     //ezzel változtatjuk a madár helyzetét
    }
}

//audio
var fly = new Audio();
var dye = new Audio();

fly.src = "fly.mp3";
dye.src = "dye.mp3";


//EVENT
document.addEventListener('keydown', (e)=>{
    bird.vy = -100;
    fly.play();
})

//START
gameLoop()
images.bird.src = 'bird.png'
images.sky.src = 'bg.png'
images.columns.src = 'columns.png'

/* 
Ceiling check +1p
Floor Check +1p
+++ Score +2p
++++++ Audio +2p
*/