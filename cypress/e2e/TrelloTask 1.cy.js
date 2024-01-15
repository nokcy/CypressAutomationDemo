describe('Trello Task 1', function(){
    
   

    it('Muilti Assertion', function(){
            cy.visit('http://localhost:3000/board/75582034899');
            cy.get('[data-cy="tasks-list"]')
                .should(item => {
                expect(item[0]).to.contain.text('milkee')
                expect(item[1]).to.contain.text('butter')
        })
           
       



    })
})