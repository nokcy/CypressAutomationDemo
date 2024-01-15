describe('Testing http request', function(){
    it('Http man', function(){
//cy.visit('https://jsonplaceholder.typicode.com/posts/1')

//cy.visit('https://identity.getpostman.com/login')
cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
.its('status').should('equal',200);

    })
it('putcall', function(){
    cy.request({
        method:'POST',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        body: {
            "id": 101
        }

    })
    .its('status').should('equal', 201);

})



it('put in', function(){
    cy.request({
        method:'PUT',
        url:'https://jsonplaceholder.typicode.com/posts/1',
        body: {
             titel : "my testing API",
             body : "this is body",
             userID : 1,
             id : 1
        }

    })

    .its('status').should('equal',200);


})


})