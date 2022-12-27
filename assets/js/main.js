function encriptar() {
  let ingresoTexto = document
    .getElementById("ingresoTexto")
    .value.toLowerCase();
  let textoEncriptado = "";

  if (!ingresoTexto.isEmpty) {
    textoEncriptado = ingresoTexto.replaceAll("e", "enter");
    textoEncriptado = textoEncriptado.replaceAll("i", "imes");
    textoEncriptado = textoEncriptado.replaceAll("a", "ai");
    textoEncriptado = textoEncriptado.replaceAll("o", "ober");
    textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
  }

  console.log(textoEncriptado);
  document.getElementById("mostrarTexto").innerHTML = textoEncriptado;
  let textoFinal = document.getElementById("ingresoTexto");
  textoFinal.value = "";
}

function desencriptar() {
  let ingresoTexto = document
    .getElementById("ingresoTexto")
    .value.toLowerCase();

  let textoDesencriptado = "";

  if (!ingresoTexto.isEmpty) {
    textoDesencriptado = ingresoTexto.replaceAll("enter", "e");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");

    document.getElementById("mostrarTexto").innerHTML = textoDesencriptado;

    let textoFinal = document.getElementById("ingresoTexto");
    textoFinal.value = "";
  }
}

function copiarTexto() {
  let copiarTexto = document.getElementById("mostrarTexto");
  copiarTexto.select();
  document.execCommand("copy");
}

/*const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};*/
