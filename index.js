window.addEventListener('load', function(){
    const buttons = document.querySelectorAll('.item:not(#menu-dot)')
    const buttonsArray = Array.from(buttons)
    
    buttonsArray.forEach(function(item) {
        item.addEventListener('click', function() {
            obj[this.id]()
        })
    })

    var obj = {
        "apak-note": function() {
            document.body.style.backgroundImage = "url(assets/apak-note.png)"
        },
        "gama-note" : function() {
            document.body.style.backgroundImage = "url(assets/gama-note.gif)"
        },
        "ice-notes": function() {
            document.body.style.backgroundImage = "url(assets/ice-notes.gif)"
        },
        "joes-notes": function() {
            document.body.style.backgroundImage = "url(assets/joes-notes.gif)"
        },
        "milk_note" : function() {
            document.body.style.backgroundImage = "url(assets/milk_note.gif)"
        },
        "mofu-note": function() {
            document.body.style.backgroundImage = "url(assets/mofu-note.gif)"
        },
        "nekojiru2": function() {
            document.body.style.backgroundImage = "url(assets/nekojiru2.png)"
        },
        "nekojiru4": function() {
            document.body.style.backgroundImage = "url(assets/nekojiru4.png)"
        },
        "nekojiru8": function() {
            document.body.style.backgroundImage = "url(assets/nekojiru8.png)"
        },
        "nekojiru13": function() {
            document.body.style.backgroundImage = "url(assets/nekojiru13.png)"
        },
        "nekojiru24": function() {
            document.body.style.backgroundImage = "url(assets/nekojiru24.png)"
        },
        "nekojiru27": function() {
            document.body.style.backgroundImage = "url(assets/nekojiru27.png)"
        },
        "nemurineko_NOTE": function() {
            document.body.style.backgroundImage = "url(assets/nemurineko_NOTE.gif)"
        },
        "nyan-note": function() {
            document.body.style.backgroundImage = "url(assets/nyan-note.gif)"
        }
    }
})