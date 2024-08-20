function encriptar() {
    let texto = document.getElementById("inputText").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = textoEncriptado;
    document.getElementById("imagen_lupa").style.display = "none";
    document.getElementById("boton_copiar").style.display = "block";
    document.getElementById("mensaje_solito").style.display = "none";
    

}

function desencriptar() {
    let texto = document.getElementById("inputText").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = textoDesencriptado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("outputText");
    textoCopiado.select();
    document.execCommand("copy");
    //alert("Texto copiado al portapapeles");
}
