describe('DOM', function(){
    
   

    it('changin DOM', function(){
        cy.visit('http://localhost:3000/');
        
      cy.get('[data-cy="star"]')
       .invoke('show')
       .click()
       //  .click({force:true})
       //comment


  

    })

})