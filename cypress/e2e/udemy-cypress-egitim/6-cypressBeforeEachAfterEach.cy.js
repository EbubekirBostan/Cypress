describe('Before After Kullanımı', () => {
    beforeEach(() => {
        cy.log('Before Kullanımı- Cypress Test')
        cy.visit('https://automationexercise.com/')
    });

    afterEach(() => {
        cy.log("After kullanimi icin ornek")
    });

    it('Basligi Dogrula', () => {
        cy.title().should('eq',"Automation Exercise")
    });

    it('Url Dogrula', () => {
        cy.url().should('include',"automation")
    });

    it('Hostname Dogrula', () => {
        cy.location('hostname').should('include',"automation")
    });
});