// Wireless

const type1 = ['<button type="button" class="btn btn-carbon">Carbon Black</button>', '<button type="button" class="btn btn-pink">Deep Pink</button>', '<button type="button" class="btn btn-cloud">Dream Cloud Vapor</button>', '<button type="button" class="btn btn-volt">Electric Volt</button>', '<button type="button" class="btn btn-lunar">Lunar Shift</button>', '<button type="button" class="btn btn-nocturnal">Nocturnal Vapor</button>', '<button type="button" class="btn btn-pulse">Pulse Red</button>', '<button type="button" class="btn btn-shock">Shock Blue</button>', '<button type="button" class="btn btn-green">Velocity Green</button>']


// Elite Series 2
const type2 = ['<button id="button" type="button" class="btn btn-dark" value = "Black">Black</button>', '<button id="button" type="button" class="btn btn-primary" value = "Blue">Blue</button>', '<button id="button" type="button" class="btn btn-danger" value = "Red">Red</button>', '<button id="button" type="button" class="btn btn-light" value = "White">White</button>']

var modal = document.getElementById("myModal");

var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

const words = ["Play like a pro with the all new Xbox Elite Wireless Controller Series 2.", "Tailor the controller with new interchangeable thumbstick and paddle shapes.", "Experience limitless customization and exclusive configuration options with the Xbox Accessories app.", "Stay in the game for longer with up to 40 hours of rechargeable battery life.","Use Xbox Wireless, Bluetooth, or the included USB-C cable to play across your Xbox One and Windows 10 devices","Play like a pro with the Xbox Elite Wireless Controller Series 2 – Core in Blue, featuring adjustable-tension thumb sticks, wrap-around rubberized grip, and shorter hair trigger locks.","Includes just the components you need to unleash your best game. Additional components sold separately for even more customization with the Complete Component Pack for Xbox Elite Wireless Controller Series 2.","Enjoy limitless customization with exclusive button mapping options in the Xbox Accessories app—even pick which color the Xbox button lights up with.","Use Xbox Wireless, Bluetooth®, or the included USB-C® cable to play across your Xbox Series X|S, Xbox One, and Windows PC."];
const black = ["../img/eblack1.jpg", "../img/eblack2.jpg", "../img/eblack3.jpg", "../img/eblack4.jpg"];

let count = -1;
let bool = false;

let select = document.getElementById("select");
const desc = document.getElementById("description");
const img = document.getElementById("image");

let onOff = false;

function change() {
    if (!onOff) return;
    if (bool) {
        document.getElementById("type").innerText = "Xbox Elite Series 2 Wireless Controller -";
    } else {
        document.getElementById("type").innerText = "Xbox Wireless Controller -";
    }
    if (count > 0) {
        const rng = Math.floor(Math.random() * words.length);
        desc.innerText = words[rng];
        const rng2 = Math.floor(Math.random() * black.length);
        img.src = black[rng2];
        
    }
}

select.addEventListener('change', function () {
    $(".col-12").empty();
    if (this.value == "wireless") {
        for (let i = 0; i < type1.length; i++) {
            document.getElementById('color').insertAdjacentHTML("beforeend", type1[i]);
        }
    } else if (this.value == "elite") {
        for (let i = 0; i < type2.length; i++) {
            document.getElementById('color').insertAdjacentHTML("beforeend", type2[i]);
        }
    } else if (this.value == "none") {
        $(".col-12").empty();
    }
});

document.getElementById('color').addEventListener('click', function(event) {
   
        onOff = true;
        const color = event.target.value;
        document.getElementById("colorType").innerText = color;
        if (color === "Black") {
            alert("Black");
            document.getElementById("price").innerText = "$163.99";
            document.querySelector("a").href = "https://www.newegg.com/microsoft-fst-00001-controller-black/p/2NG-0026-00112";
        } else if (color === "Blue") {
            alert("Blue");
            document.getElementById("price").innerText = "$136.85";
            document.querySelector("a").href = "https://www.newegg.com/p/N82E16874103740";
        } else if (color === "Red") {
            alert("Red");
            document.getElementById("price").innerText = "$124.27";
            document.querySelector("a").href = "https://www.newegg.com/p/N82E16874103739";
        } else if (color === "White") {
            alert("White");
            document.getElementById("price").innerText = "$123.00";
            document.querySelector("a").href = "https://www.newegg.com/p/N82E16874103724";
        }
        change();
    
});

btn1.onclick = function () {
    count = 1;
    modal.style.display = "block";
}
btn2.onclick = function () {
    count = 2;
    modal.style.display = "block";
}
btn3.onclick = function () {
    count = 3;
    modal.style.display = "block";
}
btn4.onclick = function () {
    count = 4;
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}








































// const carbon ='<button type="button" class="btn btn-carbon">Carbon Black</button>';
// const pink ='<button type="button" class="btn btn-pink">Deep Pink</button>';
// const cloud ='<button type="button" class="btn btn-cloud">Dream Cloud Vapor</button>';
// const volt ='<button type="button" class="btn btn-volt">Electric Volt</button>';
// const lunar ='<button type="button" class="btn btn-lunar">Lunar Shift</button>';
// const nocturnal ='<button type="button" class="btn btn-nocturnal">Nocturnal Vapor</button>';
// const pulse ='<button type="button" class="btn btn-pulse">Pulse Red</button>';
// const shock ='<button type="button" class="btn btn-shock">Shock Blue</button>';
// const green ='<button type="button" class="btn btn-green">Velocity Green</button>';
// const black ='<button type="button" class="btn btn-dark">Black</button>';
// const blue ='<button type="button" class="btn btn-primary">Blue</button>';
// const red ='<button type="button" class="btn btn-danger">Red</button>';
// const white ='<button type="button" class="btn btn-light">White</button>';
// // if(this.value = "wireless"){
//     document.getElementById('color').insertAdjacentHTML("beforeend",carbon);
//     document.getElementById('color').insertAdjacentHTML("beforeend",pink);
//     document.getElementById('color').insertAdjacentHTML("beforeend",cloud);
//     document.getElementById('color').insertAdjacentHTML("beforeend",volt);
//     document.getElementById('color').insertAdjacentHTML("beforeend",lunar);
//     document.getElementById('color').insertAdjacentHTML("beforeend",nocturnal);
//     document.getElementById('color').insertAdjacentHTML("beforeend",pulse);
//     document.getElementById('color').insertAdjacentHTML("beforeend",shock);
//     document.getElementById('color').insertAdjacentHTML("beforeend",green);
//     // $( ".col-12" ).empty();
// }
// if(this.value = "Elite"){
//     document.getElementById('color').insertAdjacentHTML("beforeend",black);
//     document.getElementById('color').insertAdjacentHTML("beforeend",blue);
//     document.getElementById('color').insertAdjacentHTML("beforeend",red);
//     document.getElementById('color').insertAdjacentHTML("beforeend",white);
//     // $( ".col-12" ).empty();
// }