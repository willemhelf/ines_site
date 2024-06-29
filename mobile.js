function displayDropdown() {
    
    Array.from(document.getElementsByClassName('hide')).forEach((element) => {
        element.style.display = 'flex'
        element.style['align-items'] = "center"
        element.style["z-index"] = 2 
        element.style["margin-top"] = "11px"
      })
}