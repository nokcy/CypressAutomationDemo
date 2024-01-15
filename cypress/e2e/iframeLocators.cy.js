describe('Iframe', function(){

    it('here we want to assert a section on our ifram', function(){
        cy.visit('https://kitchen.applitools.com/ingredients/iframe')
        cy.get('#the-kitchen-table').its('0.contentDocument.body').then(cy.wrap).find('#fruits-vegetables').should('be.visible');

    })





})