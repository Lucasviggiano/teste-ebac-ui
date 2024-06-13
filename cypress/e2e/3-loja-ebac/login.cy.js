/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')


describe('funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve realizar o login com sucesso', () => {

        cy.get('#username').type('lucas.teste@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucas')

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
    it('Deve fazer login - utilizando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucas')

    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucas')


        })

    })

    it.only('Deve fazer login com sucesso - Customizado', () => {
        cy.login('lucas.teste@teste.com', 'teste123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucas.teste-8485')


    });



})