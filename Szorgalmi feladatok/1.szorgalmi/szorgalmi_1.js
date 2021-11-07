let allampolgarok = [
    {
        id: 1001,
        nev: 'Lanyesz',
        szuletett: 1997,
        kereset: 2000000
    },
    {
        id: 1002,
        nev: 'Laurka',
        szuletett: 1995,
        kereset: 223003
    },
    {
        id: 1212,
        nev: 'Suwu',
        szuletett: 2019,
        kereset: 0
    },
    {
        id: 69420,
        nev: 'Manyesz',
        szuletett: 2001,
        kereset: 43202
    },
    {
        id: 191114,
        nev: 'Thoca', 
        szuletett: 2069,
        kereset: 2300000
    },
    {
        id: 1111,
        nev: 'Mészi',
        szuletett: 1999,
        kereset: 65000
    },
]

//A feladat
//Egy hatósági kimutatáshoz az ELTÓ népének szüksége van minden 2000 előtt született állampolárnak a személyes azonosítójára.
//Készíts JS programot ami kilistázza a 2000 előtt született állampolgárok ID-ját.


allampolgarok.filter(elem => elem.szuletett < 2000).forEach(elem => console.log(elem.id))

//B feladat
//Az állampolgárok közül kinek a legnagyobb a keresete?
//Készíts JS programot ami kiírja a legnagyobb keresetű állampolgár nevét és születési évét.

allampolgarok.sort((a, b) => {
    return a.kereset - b.kereset
})

var min = allampolgarok[0],
    max = allampolgarok[allampolgarok.length - 1]

console.log(`${max.nev} ${max.szuletett}`)



//C feladat
//Melyik 2000 után született állampolgár keresete a legalacsonyabb?
//Készíts JS programot ami kírja a legkisebb keresetű 2000 után született állampolgár nevét, ID-ját és keresetét.

allampolgarok.filter(elem => elem.szuletett > 2000).forEach(elem => console.log(`${min.nev} ${min.id} ${min.kereset}`))
