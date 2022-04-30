let red = document.getElementById("firstcolor");
let green = document.getElementById("secondcolor");
let blue = document.getElementById("thirdcolor");
let box = document.querySelector('body');
let r = 0, g = 0, b = 0;
let savecolor = document.getElementById("savecolor");
let saved = document.querySelector(".saved");
let namecolorinput = document.getElementById("namecolor");

red.addEventListener("keyup", function () {
    r = firstcolor.value;
    if (!r) {
        r = 0;
    } else if (r > 255) {
        alert("expected from 0 to 255");
    } else {
        box.style.background = `rgb(${r}, ${g}, ${b})`;
    }

});
green.addEventListener("keyup", function () {
    g = secondcolor.value;
    if (!g) {
        g = 0;
    } else if (g > 255) {
        alert("expected from 0 to 255");
    } else {
        box.style.background = `rgb(${r}, ${g}, ${b})`;
    }
    box.style.background = `rgb(${r}, ${g}, ${b})`;
});
blue.addEventListener("keyup", function () {
    b = thirdcolor.value;
    if (!b) {
        b = 0;
    } else if (b > 255) {
        alert("expected from 0 to 255");
    } else {
        box.style.background = `rgb(${r}, ${g}, ${b})`;
    }
});



function saveColor() {
    namecolor = namecolorinput.value;
    let html = `<li id="qqq" class="saved_list"><div class="saved_color" style="background:rgb(${r}, ${g}, ${b});font-size:15px;color:white">click</div>
    <span  style="color:rgb(${r}, ${g}, ${b})">${namecolor}</span><button style="background-color:rgb(241, 247, 226);" id="btn" onclick="ddd()">
    <img id="pict" src="images/delete8.svg"></button></li>`;
    saved.insertAdjacentHTML("beforeend", html);

}
savecolor.addEventListener("click", saveColor);
saved.addEventListener("click", function (e) {
    if (e.target.classList.contains("saved_color"))
        box.style.background = e.target.style.background;
});


function ddd() {
    const element = document.getElementById("qqq");
    element.remove();
}