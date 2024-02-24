 class HomepageSecond{
    navigate(){
        cy.visit("https://www.cypress.io/")
    }

   get pricinBtn(){
      return  cy.get("nav > div > ul > li:nth-child(5) > a")
    }

    get verifyPricingTitle(){
       return cy.title().should("eq","Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")
    }
}

export default new HomepageSecond()