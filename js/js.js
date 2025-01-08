// Wireless
const carbon ='<button type="button" class="btn btn-carbon">Carbon Black</button>';
const pink ='<button type="button" class="btn btn-pink">Deep Pink</button>';
const cloud ='<button type="button" class="btn btn-cloud">Dream Cloud Vapor</button>';
const volt ='<button type="button" class="btn btn-volt">Electric Volt</button>';
const lunar ='<button type="button" class="btn btn-lunar">Lunar Shift</button>';
const nocturnal ='<button type="button" class="btn btn-nocturnal">Nocturnal Vapor</button>';
const pulse ='<button type="button" class="btn btn-pulse">Pulse Red</button>';
const schock ='<button type="button" class="btn btn-shock">Shock Blue</button>';
const green ='<button type="button" class="btn btn-green">Velocity Green</button>';


// Elite Series 2
const black ='<button type="button" class="btn btn-dark">Black</button>';
const blue ='<button type="button" class="btn btn-primary">Blue</button>';
const red ='<button type="button" class="btn btn-danger">Red</button>';
const white ='<button type="button" class="btn btn-light">White</button>';

let select = document.getElementById("select");
select.addEventListener('change', function(){
    if(this.value = 'wireless'){
        document.getElementById('color').insertAdjacentHTML("beforeend",carbon);
        document.getElementById('color').insertAdjacentHTML("beforeend",pink);
        document.getElementById('color').insertAdjacentHTML("beforeend",cloud);
        document.getElementById('color').insertAdjacentHTML("beforeend",volt);
        document.getElementById('color').insertAdjacentHTML("beforeend",lunar);
        document.getElementById('color').insertAdjacentHTML("beforeend",nocturnal);
        document.getElementById('color').insertAdjacentHTML("beforeend",pulse);
        document.getElementById('color').insertAdjacentHTML("beforeend",shock);
        document.getElementById('color').insertAdjacentHTML("beforeend",green);
        $( ".col-12" ).empty();

    }
    if(this.value = 'Elite'){
        document.getElementById('color').insertAdjacentHTML("beforeend",black);
        document.getElementById('color').insertAdjacentHTML("beforeend",blue);
        document.getElementById('color').insertAdjacentHTML("beforeend",red);
        document.getElementById('color').insertAdjacentHTML("beforeend",white);
        $( ".col-12" ).empty();
    }
    
});


