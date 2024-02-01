/// <reference types='Cypress'/>

//describe('Testing View Port and Screen', () =>{
    context('Testing View Port and Screen', () =>{
   beforeEach(function(){
       cy.visit('www.scrolltest.com')
   })
it('Mac 13', () =>{
// cy.visit('https://scrolltest.com/')
    cy.viewport('macbook-13')
    // cy.screenshot()
    cy.wait(2000)
})

it('Mac 13', () =>{
    // cy.visit('https://scrolltest.com/')
  //  cy.viewport('macbook-14')
//    cy.screenshot()
   // cy.wait(2000)
})

it('Iphone 8', () =>{
     //cy.visit('https://scrolltest.com/')
 //   cy.viewport("iphone-8")
 //   cy.screenshot()
 //   cy.wait(2000)
})


})