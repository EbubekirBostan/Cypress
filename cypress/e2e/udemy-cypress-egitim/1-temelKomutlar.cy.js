describe('Temel Komutlar', () => {
    it('Temel Komutlar cy.visit Kullanimi', () => {
       
        cy.visit("/") // baseUrl tanımlandiysa sadece slash kullanmak yeterli

        cy.visit("https://example.cypress.io/") // baseUrl tanımlanmadiysa 
      
        cy.visit({

        url: "https://example.cypress.io/", //baseUrl tanımlanmadiysa 
        method: 'GET'
      }) 

         cy.visit("/commands") // baseUrl tanımlı ve commands sayfasına gitmek için

       });

       it('Temel Komutlar cy.title Kullanimi ', () => {
        cy.title().should('eq',"cypress.io")
        cy.title().should('include',"cypress")
        cy.title().should('contain',"cypress")
       });

       it('Temel Komutlar cy.url ve cy.location kullanimi', () => {

            cy.url().should('eq','https://example.cypress.io/commands')
            cy.url().should('include','/commands')

            cy.location('pathname').should('eq','/commands')// gidilen pathname i doğrular
            cy.location('protocol').should('eq','https')// gidilen protocolü doğrular
            cy.location('hostname').should('eq','https://example.cypress.io/')// tam eşitlikle dogrular
            
       });


       it('Temel Komutlar  cy.get kullanimi', () => {
        
          cy.get("#button") // dogru kullanım
          cy.get('#button').as('deneme') // cy.get('@deneme) atayarak sonrada kullanabiliriz
          cy.get('a[href="example.cypress.io]')
          cy.get('.dropdown-menu-list')
          cy.get('div.button')
          cy.get('ul li:first')
      });

      it('Temel Komutlar cy.log Kullanimi', () => {

        cy.log('Temel komt cy.log kullanimi')
        cy.log('bir mesaj',['bir mesaj','iki mesaj','uc mesaj'])// cıktı: bir mesaj,[bir mesaj,iki mesaj,uc mesaj]
        
      });

      



});