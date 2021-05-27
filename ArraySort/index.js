
let array = [];

function add() {
    
    let num = document.getElementById("arrayNumbers").value;
    array.push(num);
    document.getElementById("showArray").innerHTML = array;
    document.getElementById("arrayNumbers").value = "";
    
}

function ascSort(){
    
    array.sort(function(a, b) { return a - b });
    document.getElementById("sortedArray").innerHTML = array;

}

function descSort(){

    array.sort(function(a, b){return b - a});
    document.getElementById("sortedArray").innerHTML = array;

}