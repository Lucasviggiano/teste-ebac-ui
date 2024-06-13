/// <reference types="cypress" />

import ProdutosPage from "../../support/produtos-objects/produtos.page";

describe('funcionalidade: produtos', () => {

    beforeEach(() => {
        ProdutosPage.visitarUrl()
    });


    it('Deve selecionar um produto da lista - pelo nome', () => {
        ProdutosPage.buscarProdutoLista('Abominable Hoodie')

            cy.get('#tab-title-description > a').should('contain','Descrição')

    });


    it('deve selecionar um produto da lista', () => {
        cy.get('.product-block > .block-inner >')
            //.first()

            .eq(3)
            .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });


    it.only('Deve buscar um produto com sucesso', () => {
        ProdutosPage.buscarProduto('Apollo Running Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short')
    });

    it('Deve visitar a página do produto', () => {

    });

    it('Deve adicionar o produto ao carrinho', () => {

    });



});