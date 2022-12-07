import Auth from '../../page/auth.page'

describe('An invalid user should not be able to login', () => {

    it('Fail to login with invalid user', () => {
        cy.visit('/')

        Auth.login('invalid_user', 'secretsauce')

        cy.get(Auth.errorMssg).should('be.visible')
        cy.get(Auth.errorMssg).should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Fail to login user with without password', () => {
        cy.visit('/')

        cy.get('#user-name').type('problem_user')
        cy.get('#login-button').click()

        cy.get(Auth.errorMssg).should('be.visible')
        cy.get(Auth.errorMssg).should('contain.text', 'Password is required')
        // cy.url('/').should('have.text', 'https://www.saucedemo.com/')
    })

    it('Fail to login with user without incorrect password', () => {
        cy.visit('/')

        Auth.login('standard_user', 'sauce ')

        cy.get(Auth.errorMssg).should('be.visible')
        cy.get(Auth.errorMssg).should('contain.text', 'do not match')
        
    })

})