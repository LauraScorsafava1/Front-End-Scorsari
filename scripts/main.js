
const produtos = [
    {
        nome: "Chapéu de palha",
        preco: "R$ 112,90",
        descricao: "Este chapéu de palha é a escolha ideal para quem busca estilo e proteção solar.",
        imagem: "img/slides/Chapéu palha 1.png",
        estoque: 1
    },
    {
        nome: "Vestido de tricô curto",
        preco: "R$ 199,90",
        descricao: "Este vestido de tricô combina leveza e estilo.",
        imagem: "img/slides/Vestido Trico 1.png",
        estoque: 5
    },
    {
        nome: "Biquini preto",
        preco: "R$ 89,90",
        descricao: "Clássico e versátil, ideal para valorizar seu estilo na praia ou piscina.",
        imagem: "img/slides/biquini 6.png",
        estoque: 10
    },
    {
        nome: "Conjuto 2 bolsas de tricô",
        preco: "R$ 299,90",
        descricao: "Charmoso e funcional, perfeito para compor looks estilosos.",
        imagem: "img/slides/Conjunto bolsa Trico 2.png",
        estoque: 3
    },
    {
        nome: "Colar concha",
        preco: "R$ 149,90",
        descricao: "Delicado e elegante, ideal para adicionar um toque praiano ao seu visual.",
        imagem: "img/slides/Colar concha 1.png",
        estoque: 7
    },
    {
        nome: "Biquini Branco ",
        preco: "R$ 89,90",
        descricao: "Elegante e atemporal, perfeito para realçar sua beleza com sofisticação na praia ou piscina.",
        imagem: "img/slides/biquini 4.png",
        estoque: 15
    },
    {
        nome: "Cinto de couro",
        preco: "R$ 59,20",
        descricao: "Cinto de couro de alta qualidade, com fivela metálica.",
        imagem: "img/slides/Cinto 2.png",
        estoque: 12
    },
    {
        nome: "Pulseira artesanal",
        preco: "R$ 49,00",
        descricao: "Feita à mão com delicadeza.",
        imagem: "img/slides/Pulseira artesanal 1.png",
        estoque: 8
    },
    {
        nome: "Camisa masculina de Tricô",
        preco: "R$ 99,90",
        descricao: "Confortável e elegante, perfeita para compor looks casuais.",
        imagem: "img/slides/blusa masculina 2.png",
        estoque: 20
    },
    {
        nome: "Touca de Inverno",
        preco: "R$ 69,50",
        descricao: "Aconchegante e estilosa, ideal para manter a cabeça aquecida.",
        imagem: "img/slides/Touca 1.png",
        estoque: 18
    },
    {
        nome: "Vestido midi tricô branco",
        preco: "R$ 130,00",
        descricao: "Confortável e sofisticado, perfeito para criar looks elegantes.",
        imagem: "img/slides/Vestido Trico 5.png",
        estoque: 5
    },
    {
        nome: "Pulseira dourada de bijuteria",
        preco: "R$ 19,50",
        descricao: "Um acessório elegante e versátil.",
        imagem: "img/slides/pulseira ouro.png",
        estoque: 4
    },
    {
        nome: "Brinco de pérola",
        preco: "R$ 29,00",
        descricao: "Clássico e atemporal, perfeito para adicionar um toque de elegância.",
        imagem: "img/slides/brinco feio perola.png",
        estoque: 25
    },
    {
        nome: "Camisa estampada",
        preco: "R$ 149,90",
        descricao: "Vibrante e cheia de estilo, ideal para dar um toque descontraído e moderno.",
        imagem: "img/slides/blusa masculina 5.png",
        estoque: 10
    },
    {
        nome: "Cinto branco",
        preco: "R$ 49,10",
        descricao: "Um acessório versátil e elegante, perfeito para completar looks casuais.",
        imagem: "img/slides/Cinto 1.png",
        estoque: 6
    },
    {
        nome: "Vestido midi tricô bege",
        preco: "R$ 129,90",
        descricao: "Confortável e sofisticado, com uma cor neutra.",
        imagem: "img/slides/Vestido Trico 2.png",
        estoque: 13
    },
    {
        nome: "Vestido longo de tricô",
        preco: "R$ 219,90",
        descricao: "Elegante e aconchegante, ideal para ocasiões especiais ou dias mais frios.",
        imagem: "img/slides/Vestido Trico 3.png",
        estoque: 9
    },
    {
        nome: "Bolsa média de tricô bege",
        preco: "R$ 149,90",
        descricao: "Compacta e elegante, ideal para combinar praticidade e estilo.",
        imagem: "img/slides/Bolsa Trico 4.png",
        estoque: 30
    },
];

function generateProductCard(produto) {
    return `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
            <div class="card text-center bg-light h-100">            
                <a href="produto.html">            
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                </a>
                <a href="#" class="position-absolute end-0 p-2" style="color: #903c77;">
                    <i class="bi-suit-heart" style="font-size: 24px; line-height: 24px;"></i>
                </a>
                <div class="card-header">
                    ${produto.preco}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">${produto.descricao}</p>
                </div>
                <div class="card-footer">
                    <a href="carrinho.html" class="btn" style="background-color: #903c77; color: white; border-color: #903c77; margin-top: 0.5rem; display: block;">
                        Adicionar ao Carrinho
                    </a>
                    <small class="text-${produto.estoque > 0 ? 'success' : 'danger'}">
                        ${produto.estoque > 0 ? `${produto.estoque} Produto(s) em estoque` : 'Fora de estoque'}
                    </small>
                </div>
            </div>
        </div>`;
}

function renderizarProdutos(listaProdutos) {
    const container = document.querySelector('.products-list');
    container.innerHTML = listaProdutos.map(generateProductCard).join('');
}

function acharProduto() {
    const nomeBusca = document.getElementById("produto-input").value;
    const filteredList = produtos.filter(produto => normalizarPalavra(produto.nome).includes(normalizarPalavra(nomeBusca)));
    renderizarProdutos(filteredList);
}

function normalizarPalavra(palavra){
    return palavra.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function ordenarPorCategoria() {
    document.getElementById('category_option').addEventListener('change', function () {
        const selectedOption = this.selectedIndex;
        if (selectedOption == 0) {
            ordenarPorNome();
        }

        if (selectedOption == 1) {
            ordenarPorMenorPreco();
        }

        if (selectedOption == 2) {
            ordenarPorMaiorPreco();
        }
    });
}

function ordenarPorNome() {
    renderizarProdutos(produtos.sort((a, b) => a.nome.localeCompare(b.nome)));
}

function ordenarPorMaiorPreco() {
    renderizarProdutos(produtos.sort((a, b) => extrairPreco(b.preco) - extrairPreco(a.preco)));
}

function ordenarPorMenorPreco() {
    renderizarProdutos(produtos.sort((a, b) => extrairPreco(a.preco) - extrairPreco(b.preco)));
}

const extrairPreco = (preco) => parseFloat(preco.replace("R$ ", "").replace(",", "."));

document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos(produtos);
    ordenarPorCategoria();
});