function load() {
    var msg = document.querySelector('p.time')
    var img = document.querySelector('img.time-image')
    var body = document.querySelector('body')
    var date = new Date()
    var hours = date.getHours()
    msg.innerHTML = `Agora são ${hours} horas.`
    if (hours >= 6 && hours < 12) {
        // Bom Dia!
        img.src = 'image/sunset.jpg'
        console.log('Bom Dia!')
        body.style.backgroundColor = '#F1A40A'
    } else if (hours >= 12 && hours < 16) {
        //Meio Dia
        img.src = 'image/midday.jpg'
        console.log('Meio Dia')
        body.style.backgroundColor = '#6688AF'
    } else if (hours >= 16 && hours < 18) {
        //Boa Tarde
        img.src = 'image/afternoon.jpg'
        console.log('Boa Tarde')
        body.style.backgroundColor = '#A16158'
    } else {
        //Boa Noite
        img.src = 'image/night.jpg'
        console.log('Boa Noite')
        body.style.backgroundColor = '#05294F'
    }
}