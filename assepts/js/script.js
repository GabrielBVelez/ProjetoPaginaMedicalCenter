function menuConfig() {
    
    let menuArea = document.querySelector(".menu nav ul");
    
    if (menuArea.style.display == "flex") {
        menuArea.style.display = "none";
    }
    else {
        menuArea.style.display = "flex";
    }
}

