console.log(15)

let a = 15
let b = '15'
let c = 3

console.log(a + b)
console.log(a + c)

let tomb = [1, 2, 3, 4, 5, 6, 7]

//1. Tömbök
//tömb elemeinek kiírása
/*
for (let i = 0; i < tomb.length; i++){
    console.log(tomb[i])
}
*/

//tömb elemeinek kiírása
/*
for(let elem of tomb){
    console.log(elem)
}
*/

//indexek kiírása
for(let elem in tomb) {     
    console.log(elem)
}

//2. Objektumok
let objektum = {
    kulcs: 'érték',
    név: 'Béla',
    szuletett: 1999
}

console.log(objektum['kulcs'])
console.log(objektum.kulcs)

let objtomb = [
    {
        varos: 'Buda',
        keruletekszama: 24
    },
    {
        nev: 'Pistike',
        ev: 1999
    }
]

console.log(objtomb)

//objektumokat of-al nem lehet generálni mert azok nem tömbök
for(let elem in objektum) {
    console.log(elem)
}

for(let elem in objektum) {
    console.log(objektum[elem])
}

//1. gyakorlati példa
let filmek = [
    {
        cim: 'Tenet',
        jegyar: 2000,
        ferohelyszam: 250,
        teremszam: 12
    },
    {
        cim: 'Öngyilkos osztag',
        jegyar: 1700,
        ferohelyszam: 150,
        teremszam: 11
    },
    {
        cim: 'Star Wars: The Return of the Jedi',
        jegyar: 2200,
        ferohelyszam: 250,
        teremszam: 21
    },
    {
        cim: 'Inception',
        jegyar: 2500,
        ferohelyszam: 300,
        teremszam: 1
    },
]

function egy(){
    return 'A(z)'
}

function ketto(cim){
    if(cim[0] == 'I') {
        return 'Az'
    }
    return 'A'
}

const maganhangzok = 'AÁEÉIÍOÓÖŐUÚÜŰ'

function harom(cim){
    let van = false

    for(let i = 0; i < maganhangzok.length && !van; i++){
        if(cim[0] == maganhangzok[i]){
            van = true
        }
    }
    if(van){
        return 'Az'
    }
    return 'A'
}

function negy(cim){
    if(maganhangzok.includes(cim[0])){
        return 'Az'
    }
    return 'A'
}

function ot(cim){
    return maganhangzok.includes(cim[0].toUpperCase()) ? 'Az' : 'A'
}

for (let elem of filmek){
    console.log(`${ot(elem.cim)} ${elem.cim} a ${elem.teremszam}. teremben játszodik`)
}

//Jegyár drágább mint 2100Ft
//console.log(filmek.filter(elem => elem.jegyar > 2100))

//Egyesével kiakarjuk írni a filmeket
//filmek.forEach(elem => console.log(elem))

//Előző kettő összefűzése
filmek.filter(elem => elem.jegyar > 2100).forEach(elem => console.log(`${ot(elem.cim)} ${elem.cim} a ${elem.teremszam}. teremben játszodik`))


//Minden filmhez jegyekt akarok venni, akkor az mennyibe fog kerülni?
console.log(filmek.reduce((a, b) => {
    return a + b.jegyar
}, 0))      //0-val kezdődik és úgy adja hozzá az első elemet majd a 2.-at és így tovább, így nem marad ki az elsőnek az értéke sem

const balma = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*
balma.filter(elem => elem > 5);

[
    {
        allat: 'kutya',
        kora: 11
    }, 
    {
        allat: 'macska',
        kora: 4
    }
]
*/