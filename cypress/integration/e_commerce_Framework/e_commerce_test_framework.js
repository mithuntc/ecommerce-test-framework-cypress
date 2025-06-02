/// <reference types="cypress" />

import Homepage from '../../support/pageObjects/HomePage';

describe('E-commerce End to End Test Suite', function () {
    before(() => {
        // This will run once before all tests in this block
         cy.fixture('example.json').then((data) => {
          this.data = data; // Get the product name from the fixture
           this.homePage = new Homepage();
        });
    });
    it('End to End testing', () => {
        const url = Cypress.env('baseUrl')+'/loginpagePractise/';
        this.homePage.goTo(url);
        const productPage = this.homePage.login(this.data.username, this.data.password);
        productPage.pageValidation();
        productPage.getCardCount().should('have.length', 4);// count of cards
        productPage.selectFirstProduct(); // select first product
        productPage.selectProduct(this.data.productName);
        const cartPage =  productPage.gotoCart();
        cartPage.sumOfProducts().then((sum) => {    
            //assert that the sum of products is less than 10000
            expect(sum).to.be.lessThan(1000000);
        });
        const confirmationPage = cartPage.checkout();
        confirmationPage.submitFormDetails();
        confirmationPage.alertMessage().should('contain', ' Thank you! Your order will be delivered in next few weeks :-'); 
    });
});