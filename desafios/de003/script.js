var list = []

let finish = document.querySelector('#finish')
let add = document.querySelector('#add')
let form = document.querySelector('#number')
let sel = document.querySelector('#list')
let msg = document.querySelector('#msg')

function addList() {
    if (form.value > 0 && form.value <= 100) {
        if (list.indexOf(form.value) == -1) {
            list.push(form.value)
            sel.innerHTML = ''
            msg.innerHTML = ''
            form.value = null
            for (let i in list) {
                let item = document.createElement('option')
                item.innerText = 'Valor ' + list[i] + ' adicionado.'
                item.value = 'item' + i
                sel.appendChild(item)
            }
        } else {
            alert('Este número já foi adicionado.')
        }
    } else {
        alert('Valor Invalido!')
    }
}

function fin() {
    if (list.length == 0) {
        alert('A lista esta vazia')
        return
    }
    let totalNamber = document.createElement('p')
    let maxNumber = document.createElement('p')
    let minNumber = document.createElement('p')
    let sum = document.createElement('p')
    let average = document.createElement('p')

    msg.innerHTML = ''

    list.sort()

    totalNamber.innerText = `Ao todo temos ${list.length} números cadastrados.`
    maxNumber.innerText = `O maior valor informado foi ${list[list.length - 1]}.`
    minNumber.innerText = `O menor valor informado foi ${list[0]}.`

    let res = 0

    for(let i in list) {
        res += Number(list[i])
    }

    sum.innerText = `A soma de todos os números é ${res}.`
    
    average.innerText = `A media dos valores é ${res / list.length}.`
    msg.appendChild(totalNamber)
    msg.appendChild(maxNumber)
    msg.appendChild(minNumber)
    msg.appendChild(sum)
    msg.appendChild(average)
}