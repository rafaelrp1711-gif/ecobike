// Selecionando os elementos
const bicicleta = document.querySelector("#bicicleta");
const horas = document.querySelector("#horas");
const botaoCalcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");


// Função para calcular o preço
function calcularPreco(precoHora, quantidadeHoras) {

    let total = precoHora * quantidadeHoras;

    if (quantidadeHoras > 5) {
        total = total * 0.90;
    }

    return total;
}


// Evento do botão calcular
botaoCalcular.addEventListener("click", () => {

    const precoHora = Number(bicicleta.value);
    const quantidadeHoras = Number(horas.value);

    if (horas.value === "" || quantidadeHoras <= 0) {
        resultado.textContent = "Digite uma quantidade de horas válida!";
        return;
    }

    const total = calcularPreco(precoHora, quantidadeHoras);

    resultado.textContent = "Valor total: R$ " + total.toFixed(2).replace(".", ",");

});


// Selecionando os elementos das reservas
const nome = document.querySelector("#nome");
const botaoAdicionar = document.querySelector("#adicionar");
const listaReservas = document.querySelector("#listaReservas");

// Lista que guarda as reservas (estava faltando no código original)
const reservas = [];


// Função para adicionar reserva
function adicionarReserva() {

    const nomeDigitado = nome.value.trim();

    if (nomeDigitado === "") {
        alert("Digite seu nome!");
        return;
    }

    reservas.push(nomeDigitado);

    atualizarLista();

    nome.value = "";
}


// Evento do botão adicionar (estava faltando no código original)
botaoAdicionar.addEventListener("click", adicionarReserva);

// Também adiciona ao apertar Enter no campo de nome
nome.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        adicionarReserva();
    }
});


// Função para atualizar a lista
function atualizarLista() {

    listaReservas.textContent = "";

    reservas.forEach((reserva, index) => {

        const item = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = reserva;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("remover");

        botaoRemover.addEventListener("click", () => {

            reservas.splice(index, 1);

            atualizarLista();

        });

        item.appendChild(texto);
        item.appendChild(botaoRemover);

        listaReservas.appendChild(item);

    });
}

// Selecionando o botão de modo escuro
const botaoModoEscuro = document.querySelector("#modoEscuro");

// Evento de clique
botaoModoEscuro.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botaoModoEscuro.textContent = "Modo claro";
    } else {
        botaoModoEscuro.textContent = "Modo escuro";
    }

});
