let premier = document.getElementsByClassName("un");

document.addEventListener('mousemove', (event) => {

    x = event.clientX * 20 / window.innerWidth + "%";
    y = event.clientY * 20 / window.innerWidth + "%";

    for (let i = 0; i < 1; i++) {
        premier[i].style.left = x;
        premier[i].style.top = y;
        premier[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
})