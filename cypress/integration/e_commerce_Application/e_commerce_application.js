/// <reference types="cypress" />
import neatCSV from 'neat-csv';// import neatCSV for parsing CSV files
let productName;
describe('E-commerce Application with session storage handling Test Suite', function () {
    it('E-commerce Application with session storage handling', () => {
        cy.login().then(function () {
            cy.visit("https://rahulshettyacademy.com/client",
                {
                    onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })
        })
        cy.get(".card-body b").eq(1).then(function (ele) {
            productName = ele.text();
        })
        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type("ind")
        cy.get('.ta-results button').each(($e1, index, $list) => {
            if ($e1.text() === " India") {

                cy.wrap($e1).click()
            }
        })
        cy.get(".action__submit").click();
        cy.wait(2000)
        cy.get(".order-summary button").click();
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_apputc8.csv")
            .then(async (text) => {
                const csv = await neatCSV(text)
                const actualProductCSV = csv[0]["Product Name"]
                expect(productName).to.equal(actualProductCSV)
            })
    })
})
