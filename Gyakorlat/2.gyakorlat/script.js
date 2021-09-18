/*
//header sor
const header = ['Name', 'Trader', 'Price']

//táblázat tartalma
const tartalom = [
    {
        Name: 'Bandage',
        Trader: 'Therapist',
        Price: 7800
    },
    {
        Name: 'Slick',
        Trader: 'Ragmen',
        Price: 200000
    },
    {
        Name: 'MP-133',
        Trader: 'Jager',
        Price: 32000
    }
]

//Táblázat létrehozása
let table = document.createElement('table')

/*
let header1 = document.createElement('th')
let header2 = document.createElement('th')
let header3 = document.createElement('th')

header1.innerText = header[0]
header2.innerText = header[1]
header3.innerText = header[2]

//Ezeket hozzáfűzzük egy table rowhoz
let row = document.createElement('tr')

row.appendChild(header1)
row.appendChild(header2)
row.appendChild(header3)

table.appendChild(row)

document.body.appendChild(table)
*/
/*
let headerRow = document.createElement('tr')
for(let elem of header){
    let h = document.createElement('th')
    h.innerText = elem
    headerRow.appendChild(h)
}

table.appendChild(headerRow)

//táblázat feltöltése az adatokkal

tartalom.forEach(elem => {
    let row = document.createElement('tr')
    /*
    header.forEach(h1 => {
        let td = document.createElement('td')
        td.innerText = elem[h1]
        //sor bővítése a datánkkal
        row.appendChild(td)
    })
    */
/*
    row.innerHTML = `<td>${elem['Name']}</td><td>${elem['Trader']}</td><td>${elem['Price']}</td>`
    row.classList.add('item')
    row.dataset.Trader = elem['Trader']
    
    //táblázat bővítése a sorunkkal
    table.appendChild(row)
})

document.body.appendChild(table)

const lista = [
    'Alma', 'Körte', 'Barack', 'Banán', 'Eskünemvagyokéhes'
]

//unorderlist
let ul = document.createElement('ul')

lista.forEach(elem => {
    let li = document.createElement('li')
    li.innerText = elem
    ul.appendChild(li)
})

document.body.appendChild(ul)

/*
//Kiválasztás
console.log(document.querySelector('h1'))

//Keresés id-ra #-el, classokra pedig .-al 
console.log(document.querySelector('#header'))

console.log(document.querySelector('.bl'))

console.log(document.querySelectorAll('p'))
*/
/*
document.querySelectorAll('tr').forEach(elem => {
    if(elem.dataset.Trader == 'Jager'){
        elem.style.fontSize = '24px'
    } else if(elem.dataset.Trader == 'Therapist'){
        elem.style.fontStyle = 'Italic'
    }else{
        elem.style.fontWeight = 'bold'
    }
})
*/

const tomb = [
    {
        item: 'Alma',
        type: 'gyumolcs'
    },
    {
        item: 'Körte',
        type: 'gyumolcs'
    },
    {
        item: 'Uborka',
        type: 'zoldseg'
    },
    {
        item: 'Kosár',
        type: 'unedible'
    }
]

let ul = document.createElement('ul')

tomb.forEach(elem => {
    let li = document.createElement('li')
    li.innerText = elem.item
    li.dataset.type = elem.type
    ul.appendChild(li)
})

document.body.appendChild(ul)

document.querySelectorAll('li').forEach(elem => {
    switch (elem.dataset.type) {
        case 'gyumolcs':
            elem.style.color = '#004bA8'
        break;
        case 'zoldseg':
            elem.style.color = 'green'
            break;
        default:
            elem.style.textDecoration = 'line-through'
        break;

    }
})

