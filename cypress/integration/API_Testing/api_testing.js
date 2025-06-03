/// <reference types="cypress" />
describe('API Test Suite', function () {
    it('API testing', () => {
        const body = {
            "name": "Learn Cypress",
            "isbn": "bcd",
            "aisle": "123",
            "author": "Midhun"
        }
        cy.request('POST', 'http://216.10.245/Library/Addbook.php', body).then((response) => {
            // Validate the response
            cy.should(() => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('Msg', 'successfully added');
                expect(response.body).to.have.property('ID');
            });
        })
    })
})