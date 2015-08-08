onmessage = function(e) {
    if(e.data = "start"){
        setTimeout(calculations, 5000);
    }
    else{
        console.log("Unknown command");
    }
}

function calculations(){
    var result = 3*4;
    postMessage(result);
}