describe('Cypress Fixture Kullanimi', () => {

    beforeEach(() => {
        cy.visit("https://automationexercise.com/login")
    });
    it('Cypress Fixture Data Kullanım Ornek 1', () => {

        cy.fixture("loginData").as('credentials')

        cy.get('@credentials').then((data) =>{

            cy.login(data.invalidUsername, data.validPassword)
            
        })
      
    });

    it('Cypress Fixture Data Kullanım Ornek 1', () => {
        cy.fixture("loginData").as('credentials')

        cy.get('@credentials').then((data) =>{

            cy.login(data.validUsername, data.invalidPassword)
            
        })
    });
});