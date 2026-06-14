# 🍔 Lanchonete do Bairro

Projeto web desenvolvido para a atividade universitária de Git/GitFlow.

## 📋 Descrição

A **Lanchonete do Bairro** é um site simples e responsivo para uma lanchonete fictícia, com cardápio interativo, página de promoções e navegação entre páginas.

## 🗂️ Estrutura do Projeto

```
lanchonete-web/
├── index.html       # Página principal com hero, cardápio e footer
├── promocoes.html   # Página de promoções do dia com sidebar de categorias
├── style.css        # Folha de estilos base do projeto
├── cardapio.js      # Lógica do cardápio: array de itens, renderização e filtro
└── README.md        # Documentação do projeto
```

## 🚀 Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/danifc123/AtividadeLanchonete.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd AtividadeLanchonete/lanchonete-web
   ```

3. **Abra no navegador:**
   - Abra o arquivo `index.html` diretamente no seu navegador preferido.
   - Ou use a extensão **Live Server** do VS Code para rodar localmente.

## 📌 Páginas

- **index.html** — Página inicial com navegação, seção hero, cardápio gerado via JavaScript e rodapé.
- **promocoes.html** — Página de promoções com grid de ofertas e sidebar de categorias.

## 🧰 Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- Git / GitFlow

## 🌿 Fluxo de Branches (GitFlow)

| Branch | Finalidade |
|---|---|
| `main` | Versão de produção estável |
| `develop` | Integração de novas funcionalidades |
| `feature/*` | Desenvolvimento de novas features |
| `release/*` | Preparação de novas versões |
| `hotfix/*` | Correções urgentes em produção |

## 📦 Versões

- **v1.0.0** — Lançamento oficial com cardápio interativo e página de promoções.

## 👤 Autor

Desenvolvido por **danifc123** como atividade universitária de Git/GitFlow.
