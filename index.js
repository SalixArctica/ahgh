window.onload = () => {

    let nav = document.getElementsByClassName("nav");
    let button = document.getElementsByClassName("hamburgerButton");
    

    document.addEventListener("scroll", navColor(nav[0]));
    console.log(nav)

    button[0].addEventListener("click", collapseNav);

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

let navColor = (nav) => {

    if(window.pageYOffset > 0) {
        nav.style.background = "#6C7F72";
    }
    else {
        nav.style.background = "none";
    }

}



    
