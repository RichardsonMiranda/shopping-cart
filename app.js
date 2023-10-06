let valorTotal = 0; // Inicializa o valorTotal como 0

limpar(); // limpa o carrinho

// Função para adicionar um produto ao carrinho
function adicionar() {
    // recuperar  nome do produto, quantidade e valor.
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;

    // calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    // adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`

    // atualizar o valor total
    valorTotal = valorTotal + preco;

    let campoTotal = document.getElementById("valor-total")
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById("quantidade").value = 0;
}


// Função para limpar carrinho
function limpar() {
    valorTotal = 0
    produto = document.querySelector("input");
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";


    document.getElementById("button").setAttribute("limpar", true).valu;
}