describe('Plugins', function(){
    it('installing plugins', function(){
      //cy.wait(5000)
        cy.visit('/board/75582034899')
        cy.get('[data-id="86956519330"] > [data-cy="tasks-list"] > :nth-child(1)').as('task2')

        cy.get('[data-id="86956519330"] > [data-cy="tasks-list"] > :nth-child(2)').as('task1')

        cy.get('@task1').drag('@task2')
        })


    })
