describe('Alias, Then, Each, Wrap', () => {
    it('Kullanim ornegi', () => {

        let itemlength

        cy.visit('https://shopist.io/')

        cy.get('.navbar-section a').should('be.visible').as('NavbarMenus')// Alias Ornek

        cy.get('@NavbarMenus')
        .then(($el) => {
            itemlength = $el.length
        })
        .each(($el, index) =>{
           // cy.log($el.text())

            cy.log('Navbar Menu' + (index+1) + ':' + $el.text()) // daha şekilli yazdırma 

            if ($el.text().includes('Bedding')) {
                cy.wrap($el).click()
            }

        } )
   
    });
});