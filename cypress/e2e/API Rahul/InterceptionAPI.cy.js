describe('API', function(){

    it('API Intercetion', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
       // cy.get('.btn-primary').click()

        cy.intercept({

            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },

            {
            statusCode : 200,
            body :[{
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                }]
            }).as('bookretrival')

            cy.get('.btn-primary').click()
            cy.wait('@bookretrival')
       
    })

})