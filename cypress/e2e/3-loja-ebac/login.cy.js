/// <reference types="cypress" />

describe('funcionalidade login', () => {

    it('Deve realizar o login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('lucas.teste@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()


        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, lucas.teste-8485 (não é lucas.teste-8485? Sair)')

    })
})