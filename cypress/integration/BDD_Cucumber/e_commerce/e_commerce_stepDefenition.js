const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Homepage from "../../support/pageObjects/Homepage";
const homePage = new Homepage();
Given('I am on Ecommerce Page', () => {
    const url = Cypress.env('baseUrl') + '/loginpagePractise/';
    homePage.goTo(url);
})

When('I login to the application', function () {
    this.productPage = homePage.login(this.data.username, this.data.password);
    this.productPage.pageValidation();
    this.productPage.getCardCount().should('have.length', 4);// count of cards
    this.productPage.selectFirstProduct(); // select first product
})

When('I add items to Cart and checkout', function () {
    this.productPage.selectFirstProduct(); // select first product
    this.productPage.selectProduct(this.data.productName);
    this.cartPage = this.productPage.gotoCart();
})

When('Validate the total price limit', function () {
    this.cartPage.sumOfProducts().then((sum) => {
        //assert that the sum of products is less than 10000
        expect(sum).to.be.lessThan(1000000);
    });
})

Then('select the country submit and verify Thankyou', function () {
    const confirmationPage = this.cartPage.checkout();
    confirmationPage.submitFormDetails();
    confirmationPage.alertMessage().should('contain', ' Thank you! Your order will be delivered in next few weeks :-');
})