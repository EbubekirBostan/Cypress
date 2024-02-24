export class Homepage{
    navigate(){
        cy.visit("https://www.cypress.io/")
    }

    pricinBtn(){
        cy.get("nav > div > ul > li:nth-child(5) > a").click()
    }

    verifyPricingTitle(){
        cy.title().should("eq","Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")
    }


}