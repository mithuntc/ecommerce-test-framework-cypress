describe('Flipkart E-commerce Application Test Suite', function () {
    it('Flipkart E-commerce Application', () => {
        cy.visit('https://www.flipkart.com/');
        //clicking on login button
        cy.get('._1jKL3b').then((el) => {
            const url = el.prop('href');
            cy.visit(url);
        })
        //entering username
        cy.get('input[class="r4vIwl BV+Dqf"]').type('mithuntc783@gmail.com');
        cy.get('button[class="QqFHMw twnTnD _7Pd1Fp"]').click();
        //navigating to gmail page
        cy.visit('https://mail.google.com/mail/u/0/#inbox');
    })
})