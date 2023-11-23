function cal() {
    let val = document.querySelector('input#num')
    let res = document.querySelector('select#table')

    if (val.value.length == 0) {
        alert('Por favor, digite um número.')
    } else {
        res.innerHTML = ''
        let v = Number(val.value)
        for (let i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.value = 'val' + i
            item.text = `${i} x ${v} = ${i * v}`
            res.appendChild(item)
        }
    }
}