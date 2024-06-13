/// <reference types="cypress" />

describe('funcionalidade: produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });


    it('deve selecionar um produto da lista', () => {
        cy.get('.product-block > .block-inner >')
            //.first()

            

        cy.get('#tab-title-description > a').should('contain','Descrição')

    });
});