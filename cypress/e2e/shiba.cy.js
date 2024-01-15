describe('Tema', () => {

    it ('Tema Test Login - Add New User', () =>{
  
        cy.visit('https://temashoppingmall.shop/pump-2/')
        cy.get('#wpforms-130-field_0').type('Admin')
        cy.get('#wpforms-130-field_0-last').type('Admin')
        cy.get('#wpforms-130-field_2').type('8396752524')
        cy.get('#wpforms-130-field_8').select('2 Pcs for 1100 GHc').should('have.value','2 Pcs for 1100 GHc')
        cy.get('#wpforms-130-field_6').type('Admin')
        cy.get('#wpforms-130-field_4_1').click()
       cy.get('#wpforms-submit-130').click()
    }
    
    )
  
  })