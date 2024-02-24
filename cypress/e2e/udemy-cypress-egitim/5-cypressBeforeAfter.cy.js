describe('Before After Kullanımı', () => {
    before(() => {
        cy.log('Before Kullanımı- Cypress Test')
        cy.visit('https://automationexercise.com/')
    });

    after(() => {
        cy.log("After kullanimi icin ornek")
    });

    it('Basligi Dogrula', () => {
        cy.title().should('eq',"Automation Exercise")
    });
});