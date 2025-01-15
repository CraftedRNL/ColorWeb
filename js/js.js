// Wireless

const type1 = ['<button type="button" class="btn btn-carbon">Carbon Black</button>', '<button type="button" class="btn btn-pink">Deep Pink</button>', '<button type="button" class="btn btn-cloud">Dream Cloud Vapor</button>', '<button type="button" class="btn btn-volt">Electric Volt</button>', '<button type="button" class="btn btn-lunar">Lunar Shift</button>', '<button type="button" class="btn btn-nocturnal">Nocturnal Vapor</button>', '<button type="button" class="btn btn-pulse">Pulse Red</button>', '<button type="button" class="btn btn-shock">Shock Blue</button>', '<button type="button" class="btn btn-green">Velocity Green</button>']


// Elite Series 2
const type2 = ['<button id="button" type="button" class="btn btn-dark" value = "Black">Black</button>', '<button id="button" type="button" class="btn btn-primary" value = "Blue">Blue</button>', '<button id="button" type="button" class="btn btn-danger" value = "Red">Red</button>', '<button id="button" type="button" class="btn btn-light" value = "White">White</button>']

var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

const words = ["Play like a pro with the all new Xbox Elite Wireless Controller Series 2.", "Tailor the controller with new interchangeable thumbstick and paddle shapes.", "Experience limitless customization and exclusive configuration options with the Xbox Accessories app.", "Stay in the game for longer with up to 40 hours of rechargeable battery life.","Use Xbox Wireless, Bluetooth, or the included USB-C cable to play across your Xbox One and Windows 10 devices","Play like a pro with the Xbox Elite Wireless Controller Series 2 – Core in Blue, featuring adjustable-tension thumb sticks, wrap-around rubberized grip, and shorter hair trigger locks.","Includes just the components you need to unleash your best game. Additional components sold separately for even more customization with the Complete Component Pack for Xbox Elite Wireless Controller Series 2.","Enjoy limitless customization with exclusive button mapping options in the Xbox Accessories app—even pick which color the Xbox button lights up with.","Use Xbox Wireless, Bluetooth®, or the included USB-C® cable to play across your Xbox Series X|S, Xbox One, and Windows PC."];
const black = ["./img/eblack1.jpg", "./img/eblack2.jpg", "./img/eblack3.jpg", "./img/eblack4.jpg"];
const blue = ["./img/eblue1.jpg", "./img/eblue2.jpg", "./img/eblue3.jpg", "./img/eblue4.jpg"];
const white = ["./img/ewhite1.jpg", "./img/ewhite2.jpg", "./img/ewhite3.jpg", "./img/ewhite4.jpg"];
const red = ["./img/ered1.jpg", "./img/ered2.jpg", "./img/ered3.jpg", "./img/ered4.jpg"];

let color1 = [black, blue, red, white];

let count = -1;
let bool = false;

let select = document.getElementById("select");

let num =0;
const price = document.querySelectorAll(".price");
const anchor = document.querySelectorAll("a");
const colorText = document.querySelectorAll(".colorType");
const background = document.querySelectorAll(".col-lg-4");

const arry = [document.getElementById("image"), document.getElementById("image1"), document.getElementById("image2"), document.getElementById("image3")]
const arry2 = [document.getElementById("description"),document.getElementById("description1"),document.getElementById("description2"),document.getElementById("description3")]

let onOff = false;

function getColor(item, index) {
    if(num === 0){
        arry[index].src = black[index];
    }else if(num === 4){
        arry[index].src = blue[index];
    }else if(num === 8){
        arry[index].src = red[index];
    }else if(num === 12){
        arry[index].src = white[index];
    }

}

function change() {
    color1.forEach(getColor);
    if (!onOff) return;
    if (bool) {
        document.getElementById("type").innerText = "Xbox Elite Series 2 Wireless Controller -";
    } else {
        document.getElementById("type").innerText = "Xbox Wireless Controller -";
    }
    if (count > 0) {
        
        for(let i = 0; i < 4; i++){
            let rng = Math.floor(Math.random() * words.length);
            color1.forEach(getColor);

            arry2[i].innerText = words[rng];
        }
        
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
        count =1;
        onOff = true;
        const color = event.target.value;
     
        if (color === "Black") {
            
            for(let i = 0; i < 4; i++){
                price[i].innerText = "$163.99";
                anchor[i].href = "https://www.newegg.com/microsoft-fst-00001-controller-black/p/2NG-0026-00112";
                colorText[i].innerText = "Black";
                background[i].style.background = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(107,107,107,0.4822303921568627) 54%, rgba(140,140,140,1) 100%)";
                num=0;
            }
        } else if (color === "Blue") {
          
            for(let i = 0; i < 4; i++){
                price[i].innerText = "$136.85";
                anchor[i].href = "https://www.newegg.com/p/N82E16874103740";
                colorText[i].innerText = "Blue";
                background[i].style.background = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(123,255,253,0.4822303921568627) 54%, rgba(130,141,255,1) 100%)";
                num=4;
            }

        } else if (color === "Red") {
            
            for(let i = 0; i < 4; i++){
                price[i].innerText = "$124.27";
                anchor[i].href = "https://www.newegg.com/p/N82E16874103739";
                colorText[i].innerText = "Red";
                background[i].style.background = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,123,168,0.4822303921568627) 54%, rgba(255,130,130,1) 100%)";
                num=8;
            }
        } else if (color === "White") {
            
            for(let i = 0; i < 4; i++){
                price[i].innerText = "$123.00";
                anchor[i].href = "https://www.newegg.com/p/N82E16874103724";
                colorText[i].innerText = "White";
                background[i].style.background = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(130,130,130,0.4822303921568627) 54%, rgba(255,255,255,1) 100%)";
                num=12;
            }

        }
       
        change();
    
});

btn1.onclick = function () {
    if(count >0){
        count = 1;
    modal.style.display = "block";
    }
}
btn2.onclick = function () {
    if(count >0){
        count = 2;
    modal1.style.display = "block";
    }
}
btn3.onclick = function () {
    if(count >0){
        count = 3;
    modal2.style.display = "block";
    }
}
btn4.onclick = function () {
    if(count >0){
        count = 4;
    modal3.style.display = "block";
    }
}


var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

const modals = [modal, modal1, modal2, modal3];

window.onclick = function (event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    document.getElementById("instruction").style.display = "none";
  }



