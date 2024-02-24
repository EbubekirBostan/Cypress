describe('Cypress Locator', () => {

    it('Html element locate etme', () => {

        cy.get('#user-name') // id ile locate etmek için atribute değerinin önüne hashtag'#' koyulur

        cy.get('.login-box') // class ile yaparken başına '.' koyulur

        cy.get('input') // tagname ile locate etme

        cy.get('input[name="user-name"]') // tagname ve attribute ile locate etme

        cy.get('input[name]:contains("Username")') // text içeren element ile locate etme
        cy.get('input:contains("Username")') // text içeren element ile locate etme
        cy.get('input').contains("Login") // text içeren element ile locate etme
        cy.contains("Login") // text içeren element ile locate etme


     });
});