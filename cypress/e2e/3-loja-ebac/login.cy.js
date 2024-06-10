/// <reference types="cypress" />

describe('funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve realizar o login com sucesso', () => {

        cy.get('#username').type('lucas.teste@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucas.teste-8485 (não é lucas.teste-8485? Sair)')

    })
    it('deve exibir uma mensagem de erro ao inserir usuário invalido', () => {

        cy.get('#username').type('lucas.tete@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('lucas.teste@teste.com')
        cy.get('#password').type('teste1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail lucas.teste@teste.com está incorreta. Perdeu a senha?')

    });



})