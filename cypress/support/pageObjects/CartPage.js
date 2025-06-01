import ConfirmationPage from "./ConfirmationPage";

class Cartpage {
    checkout() {
        //check out
        cy.get('button.btn.btn-success').click();
        return new ConfirmationPage();
    }
    sumOfProducts() {
        let sum = 0;
        // price check cannot exceed 10000
       return cy.get('tr td:nth-child(4) strong').each(($el) => {
            const price = Number($el.text().split(" ")[1].trim());
            sum = sum + price;
        }).then(() => {
            return sum;
        });

    }

} export default Cartpage;