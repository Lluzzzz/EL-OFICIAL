function imc() {
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value); 
    let c = parseFloat(document.getElementById("n3").value); 

    let alturaTotalPulgadas = b * 12 + c; 

    let d = (a / (alturaTotalPulgadas ** 2)) * 703; 

   

    if (d < 18.5) {
        document.getElementById("es").innerHTML ="Su valor de IMC es de: "+d.toFixed(1)+ " que lo clasifica como: Bajo de peso";
    } else if (d >= 18.5 && d <= 24.9) {
        document.getElementById("es").innerHTML ="Su valor de IMC es de: "+d.toFixed(1)+ " que lo clasifica como:Peso normal";
    } else if (d >= 25 && d <= 29.9) {
        document.getElementById("es").innerHTML ="Su valor de IMC es de: "+d.toFixed(1)+ " que lo clasifica como:Sobrepeso";
    } else {
        document.getElementById("es").innerHTML ="Su valor de IMC es de: "+d.toFixed(1)+ " que lo clasifica como:Obesidad";
    }
}


function edadhumana() {
    let x = parseFloat(document.getElementById("n4").value);
    let y = parseFloat(document.getElementById("n5").value); 
    let w = 0; 

    if (x <= 2) {
       
        w = x * 12.5;
    } else {
        
        w = 25 + (x - 2) * 4;
    }

   
    if (y >= 6) {
        w++;
    }

    document.getElementById("gua").innerHTML = "La edad humana de la mascota es aproximadamente: " + w + " años";
}

function edadporlog() {
    let x = parseFloat(document.getElementById("f").value); 
    let w = 0; 

    if (x >= 1) {
        w = 16 * Math.log(x) + 31;
    } else {
        w = 15; 
    }

    document.getElementById("guau").innerHTML = "La edad humana de la mascota (fórmula logarítmica) es aproximadamente: " + w.toFixed(2) + " años";
}
