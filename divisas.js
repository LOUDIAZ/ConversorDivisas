let importe = document.getElementById("importe");
importe.addEventListener("keyup", convertir);
txtResultado = document.getElementById("resultado");

let divisa1 = document.getElementById("inputdivisa1");
divisa1.addEventListener("change", convertir);

let divisa2 = document.getElementById("inputdivisa2");
divisa2.addEventListener("change", convertir);

let dolar = 0.00431;;
let euro = 0.00399;


function convertir() {
    if (importe.value == "") {
        return;
    }
    numero = importe.value;
    numero = parseFloat(numero);
    resultado = Math.round(3);

    if (divisa1.value == "peso" && divisa2.value == "peso"){
        resultado = numero * 1 ;
        txtResultado.innerHTML = numero +" Pesos son: " + resultado.toFixed(2) + " Pesos";
    }
    else if (divisa1.value == "peso" && divisa2.value == "dolar"){
        resultado= numero * dolar ;
        txtResultado.innerHTML = numero +" Pesos son: " + resultado.toFixed(2) + " Dólares";
    }
    else if (divisa1.value == "peso" && divisa2.value == "euro"){
        resultado = numero * euro ;
        txtResultado.innerHTML = numero +" Pesos son: " + resultado.toFixed(2) + " Euros";
    }
    else if (divisa1.value == "dolar" && divisa2.value == "peso"){
        resultado = numero / dolar ;
        txtResultado.innerHTML = numero +" Dólares son: " + resultado.toFixed(2) + " Pesos";
    }
    else if (divisa1.value == "dolar" && divisa2.value == "dolar"){
        resultado = numero * 1 ;
        txtResultado.innerHTML = numero +" Dólares son: " + resultado.toFixed(2) + " Dólares";
    }
    else if (divisa1.value == "dolar" && divisa2.value == "euro"){
        resultado = numero * (dolar/euro) ;
        txtResultado.innerHTML = numero +" Dólares son: " + resultado.toFixed(2) + " Euros";
    }
    else if (divisa1.value == "euro" && divisa2.value == "peso"){
        resultado = numero /euro ;
        txtResultado.innerHTML = numero +" Euros son: " + resultado.toFixed(2) + " Pesos";
    }
    else if (divisa1.value == "euro" && divisa2.value == "dolar"){
        resultado = numero * (euro/dolar) ;
        txtResultado.innerHTML = numero +" Euros son: " + resultado.toFixed(2) + " Dólares";
    }
    else if(divisa1.value == "euro" && divisa2.value == "euro"){
        resultado = numero *1 ;
        txtResultado.innerHTML = numero +" Euros son: " + resultado.toFixed(2) + " Euros";
    }
}