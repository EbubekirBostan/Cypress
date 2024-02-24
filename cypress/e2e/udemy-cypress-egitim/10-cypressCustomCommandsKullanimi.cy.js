describe('Custom Commands', () => {

    beforeEach(() => {
        cy.visit("https://automationexercise.com/login")
    });
    it('Custom Commands Kullanim Ornek', () => {
        cy.login('deneme@abc.com','deneme')
    });

    it('Custom Commands Kullanim Ornek invalid password', () => {
        cy.login('deneme@gmail.com','deneme')
    });
});