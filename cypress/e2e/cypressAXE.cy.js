/// <reference types="cypress"/>

describe('Here is testing Axe', function(){
    it('Axe to check our site feature for a11y', function(){
        cy.visit('https://todomvc.com/examples/react/')
        cy.injectAxe()
        cy.checkA11y()
//it reported 4 errors 
//number 1 was colour contrast it should follow WCAG AA contrast ratio
    })

// we exclude some part left pane

it('here we want to exclude some part of the page', function(){
    cy.visit('https://todomvc.com/examples/react/')
    cy.injectAxe()
   cy.checkA11y({exclude:['.learn']});

})


// we want to test a specicit element on the page

it('testing A11y conforminity on a particular section of the page', function(){
    cy.visit('https://todomvc.com/examples/react/');
    cy.injectAxe();
   cy.checkA11y('.learn');

})


// we want to test a specify severity errors
it('should only include rules with serious and critical impacts', function() {
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
  })
  



  it('should exclude specific accessibility rules', function()  {
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: false },
      },
    });
  });






})