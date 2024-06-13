function colorChange() {
    let btn = document.getElementsByClassName('btn')[0]
    btn.addEventListener('click', function onClick() {
        document.querySelector('.canvas-parent').style.backgroundColor = "blue"
        console.log("test")
    })
}