function toCount() {
    let start = Number(document.querySelector('input#start').value)
    let end = Number(document.querySelector('input#end').value)
    let step = Number(document.querySelector('input#step').value)

    if (step <= 0) {
        let conf = confirm('Numero invalido! O número Passo tem que ser maior que 0. Começar por 1?')
        if (!conf) {
            return
        }
        step = 1
    }

    let p = document.querySelector('p#result')
    p.innerHTML = 'Contagem: <br>'

    if (start < end) {
        for (let i = start; i <= end; i += step) {
            p.innerHTML += i + ' \u{1F449} '
        }
    } else {
        for (let i = start; i >= end; i -= step) {
            p.innerHTML += i + ' \u{1F449} '
        }
    }
    p.innerHTML += '\u{1F3C1}'
}