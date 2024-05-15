function imc() {
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value); 
    let c = parseFloat(document.getElementById("n3").value); 

    let alturaTotalPulgadas = b * 12 + c; 

    let d = (a / (alturaTotalPulgadas ** 2)) * 703; 

    if (d < 18.5) {
        document.getElementById("es").innerHTML = "Su valor de IMC es de: " + d.toFixed(1) + " que lo clasifica como: Bajo de peso";
    } else if (d >= 18.5 && d <= 24.9) {
        document.getElementById("es").innerHTML = "Su valor de IMC es de: " + d.toFixed(1) + " que lo clasifica como: Peso normal";
    } else if (d >= 25 && d <= 29.9) {
        document.getElementById("es").innerHTML = "Su valor de IMC es de: " + d.toFixed(1) + " que lo clasifica como: Sobrepeso";
    } else {
        document.getElementById("es").innerHTML = "Su valor de IMC es de: " + d.toFixed(1) + " que lo clasifica como: Obesidad";
    }
}

function imcm() {
    let a = parseFloat(document.getElementById("m1").value);
    let b = parseFloat(document.getElementById("m2").value);
    let d = a / (b ** 2);
    if (d < 18.5) {
        document.getElementById("ts").innerHTML = "Su valor de IMC es de: " + d.toFixed(1) + " que lo clasifica como: Bajo de peso";
    } else if (d >= 18.5 && d <= 24.9) {
        document.getElementById("ts").innerHTML = "Su valor de IMC es de: " + d.toFixed(1) + " que lo clasifica como: Peso normal";
    } else if (d >= 25 && d <= 29.9) {
        document.getElementById("ts").innerHTML = "Su valor de IMC es de: " + d.toFixed(1) + " que lo clasifica como: Sobrepeso";
    } else {
        document.getElementById("ts").innerHTML = "Su valor de IMC es de: " + d.toFixed(1) + " que lo clasifica como: Obesidad";
    }
} 




function edadhumana() {
    let x = parseFloat(document.getElementById("n4").value);
    let y = parseFloat(document.getElementById("n5").value); 
    let w = 0; 

    if (x == 0 && y <= 6) {
        w = (y / 12)*10;
    } else if (x <= 1) {
        w = x * 15 + 5;
    } else if (x === 2) {
        w = 20 + 6;
    } else {
        w = 21 + (x - 2) * 4;
    }

    if (x >= 6 || (x === 5 && y >= 6)) {
        w++;
    }

    document.getElementById("gua").innerHTML = "La edad humana de la mascota es: " + w.toFixed(1) + " años";
}



function edad7() {
    let x = parseFloat(document.getElementById("q").value);
    let g = x*7; 

    document.getElementById("wow").innerHTML = "La edad humana de la mascota es: " + g + " años";
}

function nueva() {
    let x = parseFloat(document.getElementById("d").value); 
    let w = 0; 

    if (x >= 1) {
        w = (16 * Math.log(x)) + 31;
    } else {
        w = 15; 
    }

    document.getElementById("miau").innerHTML = "La edad humana de la mascota es: " + w.toFixed(2) + " años";
}