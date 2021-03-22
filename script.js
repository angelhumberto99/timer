const time = document.getElementById("time");
var btn = document.getElementById("restart-btn");
var file = JSON.parse(localStorage.getItem('data.json'));
var interval;
var counter = 0;
var click = false;

function addTime() {
    counter++;
    var s = counter % 60;
    var m = Math.trunc((counter/60)%60);
    var h = Math.trunc(((counter/3600)%12));
    var aux = `${h < 10? `0${h}`:h }:${m < 10? `0${m}`:m }:${s < 10? `0${s}`:s }`;
    time.innerHTML = aux;
}

function startTime() {
    if (!click) {
        click = true;
        interval = setInterval(addTime, 1000);
        btn.style.display = "none";
    }
    else {
        click = false;
        clearInterval(interval);
        btn.style.display = "block";
    }
}

function restart() {
    counter = 0;
    time.innerHTML = "00:00:00";
    btn.style.display = "none";
}

function save() {
    var aux;
    obj = {
        time: time.innerHTML
    }
    aux = [...file, obj] 
    console.log(aux);
    // file = [...file, obj];
    localStorage.setItem('data.json', JSON.stringify(aux));
}

window.onbeforeunload = function() {
    save();
}
