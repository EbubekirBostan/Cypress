describe('Back Forward kullanimi', () => {
    
    it('cypress.io sayfasına gidip tarayıcuda ileri geri komutlarını ögrenecegiz', () => {
        cy.visit("https://www.cypress.io/")

        cy.get("nav > div > ul > li:nth-child(5) > a").click()

        cy.title().should("eq","Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")

        cy.go("back") // anasayfaya geri gelecek cy.go(-1) de yazılabilir

        cy.title("eq","Testing Frameworks for Javascript | Write, Run, Debug | Cypress")

        cy.go("forward")// tekrar pricing sayfasına gidecek cy.go(1) diyerekte işlemi yapar

        cy.title().should("eq","Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")


    });

});