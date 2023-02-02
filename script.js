function encriptar() { 
    // Obtener el valor ingresado en el elemento HTML con id "textoEncriptado"
    var texto = document.getElementById('bloqueEncriptador').value; 
    
    // Verificar que el valor no esté vacío
    if (!texto) {
        return alert("No ha escrito ningún mensaje para encriptar");
    }
    
    // Convertir el texto a minúsculas
    texto = texto.toLowerCase(); 
    
    // Reemplazar todas las ocurrencias de las letras "e", "i", "a", "o", y "u"
    texto = texto.replace(/e/img, 'enter');
    texto = texto.replace(/i/img, 'imes');
    texto = texto.replace(/a/img, 'ai');
    texto = texto.replace(/o/img, 'ober');
    texto = texto.replace(/u/img, 'ufat');
    
    // Asignar el valor encriptado al elemento HTML con id "bloqueDesencriptado"
    document.querySelector('#bloqueDesencriptado').value = texto; 
    
    // Mostrar el botón "botonCopiar" y establecer su estilo de visualización como "inline-block"
    document.getElementById('botonCopiar').style.display = 'inline-block'; 
    
    // Limpiar el valor del elemento HTML con id "textoEncriptado"
    document.getElementById('bloqueEncriptador').value = ""; 
}

// Asignando funcion al boton Encriptar
document.getElementById('botonEncriptar').addEventListener('click', encriptar);


function desencriptar() { 
    // Obtener el valor ingresado en el elemento HTML con id "textoEncriptado"
    var textoDesencriptado = document.getElementById('bloqueEncriptador').value; 
    
    // Verificar que el valor no esté vacío
    if (!textoDesencriptado) {
        return alert("No ha escrito ningún mensaje para desencriptar");
    }
    
    // Convertir el texto a minúsculas
    texto = textoDesencriptado.toLowerCase(); 
    
    // Reemplazar todas las ocurrencias de las letras "e", "i", "a", "o", y "u"
    texto = texto.replace(/enter/img, 'e');
    texto = texto.replace(/imes/img, 'i');
    texto = texto.replace(/ai/img, 'a');
    texto = texto.replace(/ober/img, 'o');
    texto = texto.replace(/ufat/img, 'u');
    
    // Asignar el valor encriptado al elemento HTML con id "bloqueEncriptador"
    document.querySelector('#bloqueEncriptador').value = texto; 
    

}


// Asignando funcion al boton Desencriptar
document.getElementById('botonDesencriptar').addEventListener('click', desencriptar);


function copiar() {
    var contenido = document.querySelector('#bloqueDesencriptado');

    if (!contenido.value) {
        return alert("No hay nada para copiar");
    }

    contenido.select();
    document.execCommand('copy');
    contenido.value = '';
}


// Asignando funcion al boton Copiar
document.getElementById('botonCopiar').addEventListener('click', copiar);
