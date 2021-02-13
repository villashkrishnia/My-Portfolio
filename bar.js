document.getElementById("bars").onclick = function() {
    document.getElementById("inside-bars").style.display = "block";
    document.getElementById("bars").style.display = "none";
};

document.getElementById("cross").onclick = function() {
    document.getElementById("inside-bars").style.display = "none";
    document.getElementById("bars").style.display = "block";
};

var i;
var z = document.getElementsByClassName("Tbar");
for (i = 0; i < z.length; i++) {
    z[i].onclick = function() {
        document.getElementById("inside-bars").style.display = "none";
        document.getElementById("bars").style.display = "block";
    }
}