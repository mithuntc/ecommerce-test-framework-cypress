/// <reference types="cypress" />
describe('Mocking HTTP Test Suite', function () {
    it('Mocking HTTP and testing', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            // Mocking the response
            statusCode: 200,
            body: [{
                "book_name": "RestAssured with Java",
                "isbn": "LSA",
                "aisle": "2303"
            }]
        }).as('bookRetrievalData');
        // Click on the 'Library' button
        cy.get('button.btn.btn-primary').click();
        // Wait for the mocked HTTP request to complete
        cy.wait('@bookRetrievalData').then(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })

})
