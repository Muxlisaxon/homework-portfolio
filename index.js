let black = document.querySelectorAll(".black")

document.onmousemove = () => {
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";

    for( let i = 0; i < 2; i++){
        black[i].style.left = x;
        black[i].style.top = y;
        black[i].style.transform = "translate(-"+x+" , -"+y+")"
    }
}







