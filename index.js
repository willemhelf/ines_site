function colorChange() {
    let btn = document.getElementsByClassName('btn')[0]
    btn.addEventListener('click', function onClick() {
        document.querySelector('body').style.backgroundColor = "blue"
        console.log("test")
    })
}