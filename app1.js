const readline = require(`readline`)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`Ingrese una cadena de texto : `, (cadena) => {

    function contador(cadena) {
        let vocales = "aeiouAEIOU";
        let numVocales = 0
        let numDigitos = 0

        for (let i = 0; i < cadena.length; i++) {
            let char = cadena[i];
            if (vocales.includes(char)) {
                numVocales++;
            } else if (char >= '0' && char <= '9') {
                numDigitos++;
            }
        }

        return { numVocales, numDigitos };
    }

    while (cadena === "") {
        cadena = prompt("Ingresa una cadena de texto (no puede estar vacia): ");
    }

    let resultado = contador(cadena);

    console.log("El numero de vocales es: ", resultado.numVocales);
    console.log("El numero de ddgitos es: ", resultado.numDigitos);
})