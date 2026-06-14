const itensCardapio = [
    { nome: 'X-Burguer', preco: 18.90, categoria: 'Lanches' },
    { nome: 'X-Bacon', preco: 21.90, categoria: 'Lanches' },
    { nome: 'Combo Família', preco: 45.90, categoria: 'Combos' }
];

function renderizarCardapio() {
    const container = document.getElementById('itens-cardapio');
    if (!container) return;

    container.innerHTML = '';

    itensCardapio.forEach(item => {
        const precoFormatado = `R$ ${item.preco.toFixed(2).replace('.', ',')}`;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        
        itemDiv.innerHTML = `
            <h3>${item.nome}</h3>
            <p>${precoFormatado}</p>
        `;
        
        container.appendChild(itemDiv);
    });
}

// Inicializa a renderização quando a página carregar
document.addEventListener('DOMContentLoaded', renderizarCardapio);
