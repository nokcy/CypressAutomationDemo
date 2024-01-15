describe('cookies hack', function(){
    it('using cookies for auto login',function(){
        cy.visit('/')
        cy.setCookie('trello_token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvcnlvbm9rQGdtYWlsLmNvbSIsImlhdCI6MTcwNDYxOTUxNywiZXhwIjoxNzA0NjIzMTE3LCJzdWIiOiIxIn0.x7j98VMKyW-9kjWOsXKZ6zC_2J75DULPog9aBAwmI_s')
       cy.reload()
    } )

} )