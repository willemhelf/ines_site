window.addEventListener('load', function(){
    const backgroundImages = ["assets/apak-note.png", "assets/gama-note.gif", "assets/ice-notes.gif", "assets/joes-notes.gif", "assets/milk_note.gif", "assets/mofu-note.gif", "assets/nekojiru2.png", "assets/nekojiru4.png", "assets/nekojiru8.png", "assets/nekojiru13.png", "assets/nekojiru24.png", "assets/nekojiru27.png","assets/nemurineko_NOTE.gif", "assets/nyan-note.gif"]
    const buttons = document.querySelectorAll('.item')
    const buttonsArray = Array.from(buttons)

    for (var i = 0; i < buttonsArray.length - 1; i++) {
        buttonsArray[i].addEventListener("click", function() {
            console.log(backgroundImages[i])
        })
    }
})

// `url(${backgroundImages[i]})`