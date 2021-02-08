function disappear() {
    if (this.style.display = "initial") {
        this.style.display = "none"
    }else{
        this.style.display = "initial"
    }
    
}

function appear() {
    if (this.style.display = "none") {
        this.style.display = "initial"
    }else{
        this.style.display = "none"
    }
    
}

mcgovernvote.addEventListener("mouseover", disappear)
mcgovernvote.addEventListener("mouseout", appear)



// On Load

function loadEvent() {
    alert("Welcome, choose wisely");
}



// On context menu
spinning.oncontextmenu = (e) => {
    e.preventDefault();
}

// On Mouse Move
// Not working
document.getElementById("nixon").addEventListener("onmousemove", function() {
    if (this.style.display = "none"){
        this.style.display = "initial"
    }else {
        this.style.display = "none"
    }
});


// Loop
//Not working
for (let i = 0; i < 9; i++) {
    let square = document.createElement("div")
    main.appendChild(square);
}





// Field Thing

field.onclick = function (event) {

    //find the window relative field coordinates
    let fieldCoords = this.getBoundingClientRect();
    console.log(field.clientTop);
    //clientTop means border 
    let mcgovernCoords = {
        top: event.clientY - fieldCoords.y - field.
        clientTop - mcgovern.clientHeight/2,
        left: event.clientX - fieldCoords.x - field.
        clientLeft - mcgovern.clientWidth/2
    }

    //prevent the mcgovern from going out of bounds

    if(mcgovernCoords.top < 0) mcgovernCoords.top = 0
    if(mcgovernCoords.left < 0) mcgovernCoords = 0
    if(mcgovernCoords.left + mcgovern.clientHeight > field.clientWidth) mcgovernCoords.left = fieldWidth - mcgovern.clientWidth;
    if(mcgovernCoords.left + mcgovern.clientHeight > field.clientWidth) mcgovernCoords.top = fieldHeight - mcgovern.clientHeight;

    mcgovern.style.left = mcgovernCoords.left+'px'
    mcgovern.style.top = mcgovernCoords.top+'px'
}

// Field Thing









// Adding event listeners AND removing event listeners 
