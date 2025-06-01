import ProductPage from "./ProductPage";

class Homepage {

    goTo(url) {
        cy.visit(url);
    }
    login(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        //radio button admin or user
        cy.get('input[value="admin"]').check();
        //select dropdown
        cy.get('select.form-control').select('Student').should('have.value', 'stud');
        //checkbox termas
        cy.get('#terms').check().should('be.checked');
        //submit button 
        cy.get('#signInBtn').click();
        return new ProductPage();
    }


}export default Homepage;