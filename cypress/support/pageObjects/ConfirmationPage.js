class ConfirmationPage{
    submitFormDetails(){
        cy.submitFormDetails();//created using custome command in commands.js
    }

    alertMessage() {
        //assert that order is placed successfully
        return cy.get('.alert')
    }
} export default ConfirmationPage;