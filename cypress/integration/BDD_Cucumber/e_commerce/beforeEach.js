 beforeEach(() => {
        // This will run once before all tests in this block
          cy.fixture('example.json').then(function(data){
          this.data = data; // Get the product name from the fixture
        });
    });