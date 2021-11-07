const textarea = document.querySelector('#the-textarea');
const button = document.querySelector('#the-button');
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

//a feladat
const jsonconvert = JSON.parse(textarea.value)

function write(){
    console.log(jsonconvert)
}

button.addEventListener("click", write)

//b feladat
const daily = jsonconvert.daily;

for(let i = 0; i < daily.length; i++){
    if(daily[i].wind_deg > (180-45) && daily[i].wind_deg < (180 + 45) && daily[i].weather[0].main ==="Clouds"){
        task1.innerHTML = daily[i].dt + "," + task1.innerHTML;
        }
}

console.log(daily)

//c feladat
let maximum = 100;
for(let i = 0; i < daily.length; i++){
    if(daily[i].temp.max < maximum){
        maximum = daily[i].temp.max;
    }
}
task2.innerHTML = maximum;

//d feladat
let pres = true
for(let i = 0; i < daily.length; i++){
    if(daily[i].pressure < 1010){
        pres = false
    }
}

task3.innerHTML = pres;

//e feladat
let average = 0
for(let i = 0; i < daily.length; i++){
    average = average + daily[i].feels_like.day
    }
average = average / daily.length;


//f feladat
const hourly = jsonconvert.hourly;
let hours = 0;

for(let i = 0; i < hourly.length; i++){
    if(hourly[i].wind_speed > 3){

        hours++;

        task5.innerHTML = hours;
        }
}


