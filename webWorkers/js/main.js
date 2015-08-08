var worker = new Worker("js/worker.js");
worker.onmessage = function(e){
    addLineInConsole("Worker finished calculations and returned: "+ e.data);
}

function onCalcStart(){
    addLineInConsole("Starting worker to do calculations. You can check page responsiveness.");
    worker.postMessage("start");
}

function checkResponsiveness(){
    addLineInConsole("Page is still responsive.");
}

function addLineInConsole(text){
    var console = document.getElementById("console");
    var line = document.createElement("p");
    line.innerHTML = text;
    console.appendChild(line);
}