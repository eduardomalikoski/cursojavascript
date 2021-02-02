// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. 
// Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
// Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.
// Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.
// Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

function bhaskara(ax2, bx, c) {
    const delta = Math.pow(bx, 2) - 4 * ax2 * c

    const x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
    const x2 = (-bx - Math.sqrt(delta)) / 2 * ax2
    const vet = [x1, x2]

    console.log("Fórmula de Delta:")
    console.log("Δ = b² - 4 * a * c\n")

    console.log("Substituindo os valores:")
    console.log("Δ = " + bx + "² - 4 * " + ax2 + " * " + c)
    console.log("Δ = " + Math.pow(bx, 2) + " - " + "4" + " * " + ax2 * c)
    console.log("Δ = " + Math.pow(bx, 2) + " - " + 4 * ax2 * c)
    console.log("Δ = " + delta + "\n")

    if (delta < 1) {
        return console.log("Delta é negativo")
    }

    console.log("Fórmula de Bhaskara")
    console.log("x = -b +- √Δ / 2 * a\n")

    console.log("Substituindo os valores:")
    console.log("x = -(" + bx + ")" + " +- √" + delta + " / 2 * " + ax2)
    console.log("x = " + -(bx) + " +- " + Math.sqrt(delta).toFixed(2) + " / " + 2 * ax2)
    console.log("x = " + -(bx) + " +- " + (Math.sqrt(delta) / (2 * ax2)).toFixed(2))

    console.log("\nx' = " + -(bx) + " + " + (Math.sqrt(delta) / (2 * ax2)).toFixed(2));
    console.log(`x' = ${x1.toFixed(2)}`)

    console.log("\nx'' = " + -(bx) + " - " + (Math.sqrt(delta) / (2 * ax2)).toFixed(2));
    console.log(`x'' = ${x2.toFixed(2)}\n`)

    console.log(x1.toFixed(2) + ", " + x2.toFixed(2))
    console.log("\nVetor:")

    return console.log(vet)
}
console.clear()
bhaskara(1, 3, 2)

console.log("\n**********************************************************************\n")
bhaskara(3, 1, 2)

