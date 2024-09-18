let cars = ["bmw","volvo","saab","ford","fiat","lexus","ferrari","audi"];

let btnPush = document.getElementById("btn_push");
btnPush.onclick = funcionPush;

function funcionPush() {
    cars.push("Lexus");
    mostrarImagenes();
}

let btnPop = document.getElementById("btn_pop");
btnPop.onclick = funcionPop;

function funcionPop() {
    if (cars.length > 0) {
        cars.pop(),
        mostrarImagenes();
    }else{
        alert("No se puede eliminar más elementos ya que el arreglo esta vacío");
     }
}

function mostrarImagenes() {
    let text = "";
    for (let car of cars) {
        text += `<img src="./assets/img/${car}.png" alt="${car}" width= "100" />`;
    }
    document.getElementById("demo").innerHTML = text;
}

mostrarImagenes();

let btnUnshift = document.getElementById("btn_unshift");
btnUnshift.onclick = funcionUnshift;

function funcionUnshift() {
    cars.unshift("Ferrari");
    mostrarImagenes();
}

let btnShift = document.getElementById("btn_shift");
btnShift.onclick = funcionShift;

function funcionShift() {
    if (cars.length > 0) {
        cars.shift(),
        mostrarImagenes();
    }else{
        alert("No se puede eliminar más elementos ya que el arreglo esta vacío");
     }
}

let btnSlice = document.getElementById("btn_slice");
btnSlice.onclick = funcionSlice;

function funcionSlice() {
    let begin = document.getElementById("begin").value;
    let end = document.getElementById("end").value;

    if (begin != "" && end != "") {
        cars = cars.slice(begin, end);
        mostrarImagenes();
    } else {
        alert("Los campos no pueden estar vacíos");
    }
}