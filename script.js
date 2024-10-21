let deck = []
let options

do {
    let deckList = "Baralho:\n"
    if (deck.length === 0) {
        deckList += "0"
    } else {
        for (let i = 0; i < deck.length; i++) {
            deckList += `${i + 1}º - ${deck[i]}\n`
        }
    }

    let menu = deckList + "\n\nEscolha uma opção:\n" +
               "1 - Adicionar uma carta\n" +
               "2 - Puxar uma carta\n" +
               "3 - Sair"

    options = prompt(menu)

    if (options === "1") {
        let cardName = prompt("Digite o nome da carta:")
        if (cardName) {
            deck.unshift(cardName)
            alert(cardName + " adicionada ao baralho.")
        } else {
            alert("Nome não pode ser vazio.")
        }
    } else if (options === "2") {
        if (deck.length > 0) {
            alert("Carta puxada: " + deck.shift())
        } else {
            alert("Nenhuma carta no baralho.")
        }
    }
} while (options !== "3")

alert("Sistema encerrado.")