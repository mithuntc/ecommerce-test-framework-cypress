// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('submitFormDetails', () => {
        //place contry name
        cy.get('#country').type('India');
        //cy.config('defaultCommandTimeout', 10000); // increase timeout for country input
        cy.wait(2000); // wait for suggestions to load
        cy.get('.suggestions ul li a').contains('India').click();
        //submit order
        cy.get('input[value="Purchase"]').click();
});

// common login command
Cypress.Commands.add('login', () => {
        const email = 'apputc8@gmail.com';
        const password = 'Arya@123';
        cy.request({
            method: 'POST',
            url: 'https://rahulshettyacademy.com/api/ecom/auth/login', // replace with your login API endpoint
            body: {
                userEmail: email,
                userPassword: password
            }
        }).then(function(response){
            expect(response.status).to.eq(200);
            Cypress.env('token', response.body.token); // set token in Cypress environment variable used it in everywhere
            //window.localStorage.setItem('token', response.body.token); // store token in local storage
        });

})