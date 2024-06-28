function validarTexto(texto) {
            let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
            let mayusculas = /[A-Z]/g;  
            let vacio = "";  

            if (texto.match(mayusculas) || texto.match(caracteres)) {
                alert("No se permiten caracteres especiales ni mayúsculas");
                return true; 
            } else if (texto == vacio) {
                alert("Ingrese un mensaje para encriptar");
                return true;
            } else {
                return false;
            }
        }

        let btnEncriptar = document.querySelector("#btn-encriptar");

        btnEncriptar.addEventListener("click", function() {
            let textInput = document.querySelector("#input-texto").value;
            let textoIngresado = textInput;

            if (!validarTexto(textoIngresado)) {
                let encriptado = encriptar(textoIngresado);
                let resultado = document.querySelector("#msg");
                resultado.value = encriptado;
            } else {        
                textInput = "";     
            }
        });

        function encriptar(texto) {
            let desplazamiento = 3; // Número de posiciones a desplazar
            let encriptado = '';

            for (let i = 0; i < texto.length; i++) {
                let char = texto[i];
                let codigo = char.charCodeAt(0);
                let nuevoCodigo = codigo + desplazamiento;

                // Si el nuevo código supera 'z', se debe ajustar
                if (nuevoCodigo > 122) {
                    nuevoCodigo = 96 + (nuevoCodigo - 122);
                }

                encriptado += String.fromCharCode(nuevoCodigo);
            }

            return encriptado;
        }

        let btnCopiar = document.querySelector("#btn-copy");

        btnCopiar.addEventListener("click", function() {        
            let copiado = document.querySelector("#msg").value;
            navigator.clipboard.writeText(copiado);
            document.querySelector("#input-texto").value = "";
        });

        let btnDesencriptar = document.querySelector("#btn-desencriptar");

        btnDesencriptar.addEventListener("click", function() {
            let textoIngresado = document.querySelector("#input-texto").value;
            let desencriptado = desencriptar(textoIngresado);

            let resultado = document.querySelector("#msg");
            resultado.value = desencriptado;
        });

        function desencriptar(texto) {
            let desplazamiento = 3; // Número de posiciones a desplazar
            let desencriptado = '';

            for (let i = 0; i < texto.length; i++) {
                let char = texto[i];
                let codigo = char.charCodeAt(0);
                let nuevoCodigo = codigo - desplazamiento;

                // Si el nuevo código es menor que 'a', se debe ajustar
                if (nuevoCodigo < 97) {
                    nuevoCodigo = 123 - (97 - nuevoCodigo);
                }

                desencriptado += String.fromCharCode(nuevoCodigo);
            }

            return desencriptado;
        }
