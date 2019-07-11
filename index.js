window.onload = () => {

    let button = document.getElementsByClassName("hamburgerButton");
    button[0].addEventListener("click", collapseNav);    

    document.addEventListener("scroll", navColor);
}

let collapseNav = (event) => {

    if(event.type == "click") {
        console.log("clicked!");
        let links = document.getElementsByClassName("links");

        if(links[0].style.display == "none") {
            links[0].style.display = "grid";
        }
        else {
            links[0].style.display = "none"
        }
    }


}

let navColor = (event) => {
    


    if(event.type == "scroll" && window.innerWidth > 850) {

        let nav = document.getElementsByClassName("nav")[0];

        if(window.pageYOffset > 0) {
            nav.style.background = "#6C7F72";
        }
        else {
            nav.style.background = "none";
        }
    }
}



    
