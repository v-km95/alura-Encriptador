var nuevaCadena = '';
var caracter = ['e', 'i', 'a', 'o', 'u'];
var caracterRemplazo = ['enter', 'imes', 'ai', 'ober', 'ufat'];
var buttonEnc = document.getElementById('btnEncriptar');
var buttonDes = document.getElementById('btnDesencriptar');
var buttonCopiar = document.getElementById('btnCopiar');

function encriptar(cadenaEnc) {
    var aux = ''
    for (x = 0; x < cadenaEnc.length + 1; x++) {
        let resultado = cadenaEnc.substr(x, 1);
        aux = aux + encSustitucion(resultado);
        nuevaCadena = aux;
    }
}

function desencriptar(cadenaDes) {
    for (x = 0; x < caracter.length; x++) {
        var regexp = new RegExp(caracterRemplazo[x], "g");
        let resultado = cadenaDes.replace(regexp, caracter[x]);
        cadenaDes = resultado;
        nuevaCadena = cadenaDes;
    }
}

function encSustitucion(caracter) {
    switch (caracter) {
        case 'e':
            return 'enter'
            break;
        case 'i':
            return 'imes'
            break;
        case 'a':
            return 'ai'
            break;
        case 'o':
            return 'ober'
            break;
        case 'u':
            return 'ufat'
            break;
        default:
            return caracter;
    }
}

function mostrarResultado() {
    document.getElementById('display').style.visibility = 'hidden';
    document.getElementById('textoResultado').style.visibility = 'visible';
    document.getElementById('textoResultado').style.display = 'block';
    document.getElementById('textoResultado').innerText = nuevaCadena;
    document.getElementById('btnCopiar').style.display = 'initial';
    document.getElementById('btnCopiar').style.visibility = 'visible';
    document.getElementById('muñeco').style.display = 'none';
}

function comprobarcadena(textoParaComprobar) {
    if(textoParaComprobar !=''){

    }
}

buttonEnc.onclick = function () {
    var x = document.getElementById("area-texto").value;
    var xLower = x.toLowerCase();
    if(xLower != ''){
        encriptar(xLower);
        mostrarResultado();
    }
    else{
        document.getElementById('area-texto').placeholder = 'Por favor ingrese un texto para empezar';
    }
}

buttonDes.onclick = function () {
    var x = document.getElementById("area-texto").value;
    var xLower = x.toLowerCase();
    if(xLower != ''){
        desencriptar(xLower);
        mostrarResultado();
    }
    else{
        document.getElementById('area-texto').placeholder = 'Por favor ingrese un texto para empezar';
    }
}

buttonCopiar.onclick = function () {
    var copyText = document.getElementById('textoResultado');
    navigator.clipboard.writeText(copyText.innerText);
}