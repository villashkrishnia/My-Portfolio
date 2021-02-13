var x = document.getElementsByClassName("about_img");
var j = 0;
slide_1();

function slide_1() {
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[j].style.display = "block";
    j++;
    if (j > (x.length - 1)) { j = 0; }
    setTimeout(slide_1, 3000);

}