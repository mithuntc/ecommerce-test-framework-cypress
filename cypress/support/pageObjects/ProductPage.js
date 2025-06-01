import Cartpage from "./CartPage";

class ProductPage {
    pageValidation() {
        cy.contains('Shop Name').should('be.visible')
    }

    getCardCount() {
       return cy.get('app-card');
    }
    selectFirstProduct() {
        cy.get('app-card').eq(0).contains('button','Add').click();
    }
    selectProduct(productName){
        //assert that the product is in the cart
        cy.get('h4').should('contain', productName);
          // search for product and add to cart
        cy.get('app-card').filter(':contains("'+productName+'")').as('nokiaCard').then(() => {
            //assert that the product is visible
            cy.get('@nokiaCard').should('be.visible');
            cy.get('@nokiaCard').find('button').click();
        });
    }
    gotoCart() {
         //check out
        cy.get('a.nav-link.btn.btn-primary').click();
        return new Cartpage();
    }
} export default ProductPage;