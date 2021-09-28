let fegyverek = [
    {
        weapon: 'Mosin',
        type: 'Sniper rifle',
        durability: 92
    },
    {
        weapon: 'Vepr KM/VPO-136',
        type: 'Assault Rifle',
        durability: 69
    },
    {
        weapon: 'AKM',
        type: 'Assault Rifle',
        durability: 98
    },
    {
        weapon: 'M4A1',
        type: 'Assault Rifle',
        durability: 100
    },
    {
        weapon: 'SKS',
        type: 'Assault carbine',
        durability: 55
    },
    {
        weapon: 'Kel-Tec RFB',
        type: 'Assault carbine',
        durability: 100
    },
    {
        weapon: 'SV-98',
        type: 'Sniper rifle',
        durability: 87
    }
]

let ul = document.createElement('ul')

fegyverek.forEach(elem => {
    let li = document.createElement('li')
    li.innerText = elem.weapon
    li.dataset.type = elem.type
    li.dataset.durability = elem.durability
    ul.appendChild(li)
})

document.body.appendChild(ul)

document.querySelectorAll('li').forEach(elem => {
    if(elem.dataset.type == 'Assault Rifle'){
        elem.style.fontStyle = 'Italic'
    } else if(elem.dataset.type == 'Assault carbine'){
        elem.style.fontWeight = 'Bold'
    }else{
        elem.style.fontStyle = 'Italic'
        elem.style.fontWeight = 'Bold'
    }
})
document.querySelectorAll('li').forEach(elem => {
    if(elem.dataset.durability <= 70){
        elem.style.color = 'red'
    }else{
        elem.style.color= 'green'
    }
})