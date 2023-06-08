//variables utilizadas en las funciones construidas//

var botonEncriptar = document.querySelector(".encriptar");
var botonCopiar = document.querySelector(".copiar");
var botonDescargar = document.querySelector(".descargar");
var botonDesencriptar = document.querySelector(".desencriptar");
var contenedorMunieco = document.querySelector(".muñeco");
var contenedorH3 = document.querySelector(".h3Muñeco");
var contenedorParrafo = document.querySelector(".parrafoMuñeco");
var resultado = document.querySelector(".resultadotxt");
var textoEncriptado = encriptarTexto();
var frase = document.querySelector("#frase");
frase.focus();


//declaración de eventos click para los botones//

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copy;
botonDescargar.onclick = descargarMensaje;


//cadena de funciones que se activa con el boton encriptar//

function encriptar() {
    if (recuperarTexto(frase.value) == true) {
        ocultarAdelante();
        resultado.textContent = encriptarTexto();
        limpiarTexarea();
        alertaEncriptador();
    }

    else {
        swal("Por favor ingrese letras Minúsculas y sin Acentos!", {
            buttons: false,
            timer: 3500,
            icon: "error"
        });

    }
};


//cadena de funciones que se activa con el boton encriptar//

function desencriptar() {
    ocultarAdelante();
    resultado.textContent = desencriptaTexto();
    limpiarTexarea();
    alertaDesencriptado();
};

//validacón del texto ingresado por el usuario solo contenga letras minusculas y sin acentos//

function recuperarTexto(string) {
    if (frase.value == "") {
        return false;
    }
    else {
        var recuperar = /^[a-z\sñ]+$/

        return recuperar.test(string);
    }
};

//ocultamiento de la imagendel muñeco//

function ocultarAdelante() {
    contenedorMunieco.classList.add("ocultar");
    contenedorH3.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
};

//lógica de encriptación según parametros establecidos//

function encriptarTexto() {
    var area3 = document.querySelector("textarea");
    var textoFinal = ""; 

    for (var i = 0; i < area3.value.length; i++) {
        if (area3.value[i] == "a") {
            textoFinal = textoFinal + "ai";
        }
        else if (area3.value[i] == "e") {
            textoFinal = textoFinal + "enter";
        }
        else if (area3.value[i] == "i") {
            textoFinal = textoFinal + "imes";
        }
        else if (area3.value[i] == "o") {
            textoFinal = textoFinal + "ober";
        }
        else if (area3.value[i] == "u") {
            textoFinal = textoFinal + "ufat";
        }
        else {
            textoFinal = textoFinal + area3.value[i];
        }
    }
    return textoFinal;
};

//lógica de desencriptación según parametros establecidos//

function desencriptaTexto(mensaje) {
    var area3 = document.querySelector("textarea");
    var textoFinal = "";
    for (var i = 0; i < area3.value.length; i++) {
        if (area3.value[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if (area3.value[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if (area3.value[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if (area3.value[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if (area3.value[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + area3.value[i];
        }
    }
    return textoFinal;

};

//copiado del contenido del resultado//

function copy() {
    var copiado = document.getElementById("p1");

    copiado.select();
    document.execCommand("copy");

    alertaCopiado();
};

//limpieza del contenido ingresado por el usuario una vez se haya encriptador//

function limpiarTexarea() {
    var borrador = document.getElementById("frase");
    borrador.value = "";
};

//alerta de con sercio tercerizado notificando el encriptado//

function alertaEncriptador() {
    swal("Su mensaje fue Encriptado!", {
        buttons: false,
        timer: 3500,
        icon: "success"
    });
};

//alerta de con sercio tercerizado notificando el desencriptado//

function alertaDesencriptado() {
    swal("Su mensaje fue Desencriptado!", {
        buttons: false,
        timer: 3500,
        icon: "success"
    });
};

//alerta de con sercio tercerizado notificando el copiado del resultado del encriptado//

function alertaCopiado() {
    swal("Su mensaje fue Copiado al Portapapeles!", {
        buttons: false,
        timer: 3500,
        icon: "success"
    });
};

//descarga el resultado del encriptado o desencriptado en archivo .txt//

function descargarMensaje() {
    var textareContent = document.getElementById("p1").value;
    var file = new Blob([textareContent], { type: "text/plain" });
    var a = document.createElement("a");
    url = URL.createObjectURL(file);

    a.href = url;
    a.download = "archivo.txt"
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
};