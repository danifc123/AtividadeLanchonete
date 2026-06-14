const itensCardapio = [
    { nome: 'X-Burguer', preco: 18.90, categoria: 'Lanches' },
    { nome: 'X-Bacon', preco: 21.90, categoria: 'Lanches' },
    { nome: 'X-Tudo', preco: 25.90, categoria: 'Lanches' },
    { nome: 'Refrigerante Lata', preco: 6.00, categoria: 'Bebidas' },
    { nome: 'Suco Natural', preco: 8.50, categoria: 'Bebidas' },
    { nome: 'Combo Família', preco: 45.90, categoria: 'Combos' },
    { nome: 'Combo Kids', preco: 22.90, categoria: 'Combos' },
    { nome: 'Pudim', preco: 12.00, categoria: 'Sobremesas' },
    { nome: 'Sorvete', preco: 10.00, categoria: 'Sobremesas' }
];

function renderizarCardapio(itens = itensCardapio) {
    const container = document.getElementById('itens-cardapio');
    if (!container) return;

    container.innerHTML = '';

    if (itens.length === 0) {
        container.innerHTML = '<p>Nenhum item encontrado.</p>';
        return;
    }

    itens.forEach(item => {
        const precoFormatado = `R$ ${item.preco.toFixed(2).replace('.', ',')}`;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        
        itemDiv.innerHTML = `
            <h3>${item.nome}</h3>
            <p class="categoria-badge">${item.categoria}</p>
            <p class="preco">${precoFormatado}</p>
        `;
        
        container.appendChild(itemDiv);
    });
}

// Inicializa a renderização quando a página carregar
document.addEventListener('DOMContentLoaded', () => renderizarCardapio());
