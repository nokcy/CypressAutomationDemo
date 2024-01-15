describe('SignUp To Trello', function(){
    it('Sign Up for TrelloAp',function(){
        cy.visit('/')
        cy.get('[data-cy="login-menu"]').click()
        cy.get(':nth-child(2) > .LoginModule_logSignSwitch > a').click()
        cy.get('[data-cy="signup-email"]').click().type('boryonok@gmail.com')
        cy.get('[data-cy="signup-password"]').click().type('93051100')
        cy.get('[data-cy="welcome-email-checkbox"]').click()
        cy.get('[data-cy="signup"]').click()

    })







})