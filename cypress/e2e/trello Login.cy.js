describe('loginPage to Trello', function(){
    it('Login with Borrtyonok and 93',function(){
        cy.visit('/')
        cy.get('[data-cy="login-menu"]').click()
        cy.get('[data-cy="login-email"]').click().type('boryonok@gmail.com',{force: true})
        cy.get('[data-cy="login-password"]').click().type('93051100', {force:true})
        cy.get('[data-cy="login"]').click()
    } )

} )