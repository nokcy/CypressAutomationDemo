describe('Assertion Demo', ()=>{

it('Orange Demoing Implicit Assert', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    //should
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include','orangehrmlive.com')
    cy.url().should('contain','orangehrm')
    cy.url().should('not.contain','orangehrm2')

    cy.title().should('include','OrangeHRM')

    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist')
})

// Expecction

it('Orange Demoing Expllicit Assert', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    let expName='EoIswmpLJY nMXtzBqLSl';

    cy.get('.oxd-userdropdown-name').then((y)=>{

        let actName=y.text()
        expect(actName).to.equal(expName)
       // expect(actName).to.not.equal(expName)

       assert.equal(actName,expName)
    })


})

})