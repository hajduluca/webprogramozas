const animButton = document.querySelector('#animation');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let pixelsPerYear = 5;
let origoYear = 1000;
let dt = 0.2;

const columns = [] 
const GAP = 50 
const STROKE_DISTANCE = 300 

let gameState = 0 



function draw(){
    ctx.strokeStyle = 'red'
    ctx.beginPath()
    ctx.moveTo(40,0)
    ctx.lineTo(40,400)

    ctx.closePath()     //lezárom az úta
    ctx.stroke()
}

draw()

function newStroke(){
    const h = random(10, canvas.height)

    stroke.push(
    {
        x: canvas.height,
        y: 0,
    },
    {
        x: canvas.width,
        y: h + GAP,
        width: 30,
        height: canvas.height - GAP - h
    })
}

