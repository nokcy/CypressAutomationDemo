describe('upload pump', function(){
    it('upload Pic 1', function(){
        const filePath='1.jpg';
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile(filePath);
        cy.get('#file-submit').click();

        cy.get('#uploaded-files').contains('1.jpg')
    })




})