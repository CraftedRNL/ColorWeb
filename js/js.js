// Wireless

const type1 = ['<button type="button" class="btn btn-carbon">Carbon Black</button>','<button type="button" class="btn btn-pink">Deep Pink</button>','<button type="button" class="btn btn-cloud">Dream Cloud Vapor</button>','<button type="button" class="btn btn-volt">Electric Volt</button>','<button type="button" class="btn btn-lunar">Lunar Shift</button>','<button type="button" class="btn btn-nocturnal">Nocturnal Vapor</button>','<button type="button" class="btn btn-pulse">Pulse Red</button>','<button type="button" class="btn btn-shock">Shock Blue</button>','<button type="button" class="btn btn-green">Velocity Green</button>'] 


// Elite Series 2
const type2 = ['<button type="button" class="btn btn-dark">Black</button>','<button type="button" class="btn btn-primary">Blue</button>','<button type="button" class="btn btn-danger">Red</button>','<button type="button" class="btn btn-light">White</button>'] 



let select = document.getElementById("select");
select.addEventListener('change', function(){
  
    if(this.value == "wireless"){
        $(".col-12").empty();
        for(let i =0; i < type1.length; i++){
            document.getElementById('color').insertAdjacentHTML("beforeend",type1[i])
        }
    }
    if(this.value == "elite"){
        $(".col-12").empty();
        for(let i =0; i < type2.length; i++){
            document.getElementById('color').insertAdjacentHTML("beforeend",type2[i])
        }
    }
    if(this.value == "none"){
        $(".col-12").empty();
    }
    
});





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