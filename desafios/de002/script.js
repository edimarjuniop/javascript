function cal() {
    let val = document.querySelector('input#num').value
    let res = document.querySelector('p#tab')
    res.innerHTML = ''
    for (let i = 0; i <= 10; i++) {
        res.innerHTML += `${i} x ${val} = ${i * val}<br>`
    }
}