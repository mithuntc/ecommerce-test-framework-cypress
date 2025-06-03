/// <reference types="cypress" />
describe('Intercepting HTTP Requests Test Suite', function () {
    it('Intercepting HTTP Requests and testing', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        // Intercepting the GET request to the book API
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (request) => {
            request.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Midhun';
            request.continue((response) => {
                expect(response.statusCode).to.equal(200);
            })
        }).as('bookRetrievalDataRequest');
         // Click on the 'Library' button
        cy.get('button.btn.btn-primary').click();
        cy.wait('@bookRetrievalDataRequest');
    })
})
