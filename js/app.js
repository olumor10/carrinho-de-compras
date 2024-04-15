
let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0,00';


function adicionar(){
    //recuperar valores do produto: nome, quantidade e valor
    let obterProduto = document.getElementById('produto').value;
    let nomeProduto = obterProduto.split('-')[0];
    let valorProduto = parseInt(obterProduto.split('$')[1]);
    let quantidade = document.getElementById('quantidade').value;
    console.log(quantidade);
    //Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada.
    if (quantidade < 1 || quantidade == '' ) {
        return alert('Escolha a quantidade do produto!');
    }
    
    //calcular o preço do subtotal
    let subtotalProduto = quantidade * valorProduto;
    
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto},00</span>
  </section>`;

    //atualizar o valor total
    totalGeral = totalGeral + subtotalProduto;
    let exibeTotal = document.getElementById('valor-total');
    exibeTotal.innerHTML = `R$ ${totalGeral},00`;

    //limpa o campo Qtde
    document.getElementById('quantidade').value = '';
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0,00';
    totalGeral = 0;
}