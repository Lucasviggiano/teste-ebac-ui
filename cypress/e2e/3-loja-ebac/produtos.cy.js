/// <reference types="cypress" />

import produtosPage from "../../support/produtos-objects/produtos.page";
import ProdutosPage from "../../support/produtos-objects/produtos.page";

describe('funcionalidade: produtos', () => {

    beforeEach(() => {
        ProdutosPage.visitarUrl()
    });


    it('Deve selecionar um produto da lista - pelo nome', () => {
        ProdutosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });


    it('deve selecionar um produto da lista', () => {
        cy.get('.product-block > .block-inner >')
            .eq(3)
            .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });


    it('Deve buscar um produto com sucesso', () => {
        ProdutosPage.buscarProduto('Apollo Running Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short')
    });

    it('Deve visitar a página do produto', () => {
        ProdutosPage.visitarProduto('arcadio-gym-short')
    });

    it('Deve adicionar o produto ao carrinho', () => {
        produtosPage.buscarProduto('Celeste Sports Bra')
        produtosPage.addProdutoCarrinho('L', 'Red', 4)
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar o produto ao carrinho - Buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[3].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[3].tamanho, dados[3].cor, dados[3].quantidade)
            cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')

        })


    });


});