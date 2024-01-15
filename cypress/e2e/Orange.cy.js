describe('Orange', () => {

    it ('Orange Test Login - Add New User', () =>{
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
  
        cy.get('.oxd-autocomplete-text-input > input').type('Nokot Dauda')
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Boryo44')
  
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Mamah2Today')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Mamah2Today')
        
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click().click('Enabled').should('have.value','Enabled')
        cy.get(':oxd-select-text oxd-select-text--active').select('ESS').should('have.value','ESS')
    }
    
    )
  
  })