/// <reference types='Cypress'/>

describe('Testing View Port and Screen', function(){
   //beforeEach(function(){
       // cy.visit('www.scrolltest.com')
  //  })
it('Mac 13', function(){
   cy.visit('https://scrolltest.com/')
    cy.viewport('macbook-13')
    cy.screenshot()
    cy.wait(100)
})

it('Mac 13', function(){
    cy.visit('https://scrolltest.com/')
    cy.viewport('macbook-14')
    cy.screenshot()
    cy.wait(100)
})

it('Iphone 8', function(){
    cy.visit('https://scrolltest.com/')
    cy.viewport("iphone-8")
    cy.screenshot()
    cy.wait(100)
})


})