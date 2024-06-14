// array of assets

let backgroundImages = ["assets/apak-note.png", "assets/gama-note.gif", "assets/ice-notes.gif", "assets/joes-notes.gif", "assets/milk_note.gif", "assets/mofu-note.gif", "assets/nekojiru2.png", "assets/nekojiru4.png", "assets/nekojiru8.png", "assets/nekojiru13.png", "assets/nekojiru24.png", "assets/nekojiru27.png","assets/nemurineko_NOTE.gif", "assets/nyan-note.gif"]

// test function
// function colorChange() {
//     let btn = document.getElementsByClassName('btn')[0]
//     btn.addEventListener('click', function onClick() {
//         document.querySelector('body').style.backgroundColor = "blue"
//         console.log("test")
//     })
// }

// change background on menu button click

function backgroundChange() {
    let buttons = document.getElementsByClassName('item')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            document.body.style.backgroundImage = `url(${backgroundImages[i]})`
            console.log(document.body.style.backgroundImage)
        })
    }
}

//`url(${backgroundImages[0]})`