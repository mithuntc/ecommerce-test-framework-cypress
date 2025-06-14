describe('Flipkart E-commerce Application Test Suite', function () {
    it('Flipkart E-commerce Application', () => {
        cy.visit('https://www.flipkart.com/');
        //clicking on login button
        cy.get('._1jKL3b').then((el) => {
            const url = el.prop('href');
            cy.visit(url);
        })
        //entering username
        cy.get('input[class="r4vIwl BV+Dqf"]').type('midhuntc783@gmail.com');
    })
})