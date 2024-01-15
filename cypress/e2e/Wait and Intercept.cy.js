describe('Interception and Wait ', function(){
    it('using wait', function(){
        cy.intercept({
            method:'GET',
            url:'/api/boards'
            
        }).as('BoardLIstSpace')

        cy.visit('/')
        //cy.wait(2000)
        cy.wait('@BoardLIstSpace')
        cy.get('[data-cy=board-item]').should('have.length', 1)
    })


})