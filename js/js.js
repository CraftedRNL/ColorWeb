// Wireless

const type1 = ['<button type="button" class="btn btn-carbon">Carbon Black</button>', '<button type="button" class="btn btn-pink">Deep Pink</button>', '<button type="button" class="btn btn-cloud">Dream Cloud Vapor</button>', '<button type="button" class="btn btn-volt">Electric Volt</button>', '<button type="button" class="btn btn-lunar">Lunar Shift</button>', '<button type="button" class="btn btn-nocturnal">Nocturnal Vapor</button>', '<button type="button" class="btn btn-pulse">Pulse Red</button>', '<button type="button" class="btn btn-shock">Shock Blue</button>', '<button type="button" class="btn btn-green">Velocity Green</button>']


// Elite Series 2
const type2 = ['<button id="button" type="button" class="btn btn-dark" value = "Black">Black</button>', '<button id="button" type="button" class="btn btn-primary" value = "Blue">Blue</button>', '<button id="button" type="button" class="btn btn-danger" value = "Red">Red</button>', '<button id="button" type="button" class="btn btn-light" value = "White">White</button>']



let select = document.getElementById("select");
select.addEventListener('change', function () {

    if (this.value == "wireless") {
        $(".col-12").empty();
        for (let i = 0; i < type1.length; i++) {
            document.getElementById('color').insertAdjacentHTML("beforeend", type1[i])
        }
    }
    if (this.value == "elite") {
        $(".col-12").empty();
        for (let i = 0; i < type2.length; i++) {
            document.getElementById('color').insertAdjacentHTML("beforeend", type2[i])
        }
    }
    if (this.value == "none") {
        $(".col-12").empty();
    }
    document.getElementById("button").addEventListener("click", function(event) {
        
            alert("hello");
        
    });
    
});

function change(count) {
    if (bool) {
        document.getElementById("type").innerText = "Xbox Elite Series 2 Wireless Controller -"
    } else {
        document.getElementById("type").innerText = "Xbox Wireless Controller -"
    }
    if (count = 1) {
        document.getElementById("color").innerText = this.value;
    }
    if (count = 2) {

    }
    if (count = 3) {

    }
    if (count = 4) {

    }
}

var modal = document.getElementById("myModal");

var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

var btnArry = [btn1, btn2, btn3, btn4]

let count = 1;
let bool = false;

btn1.onclick = function () {
    count = 1;
    change();
    modal.style.display = "block";
}
btn2.onclick = function () {
    count = 2;
    change();
    modal.style.display = "block";
}
btn3.onclick = function () {
    count = 3;
    change();
    modal.style.display = "block";
}
btn4.onclick = function () {
    count = 4;
    change();
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