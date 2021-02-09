/// <reference types="cypress" />

context('Querying', () => {
    before(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('should be fetch new release list', () => {
  
        cy.get('#released').should('have.length.greaterThan', 0).wait(3000)

        cy.get('#released').parent().find('[data-icon="chevron-right"]').click()

        cy.get('#released').should(($div) => {
            expect($div.scrollLeft(), 'scollLeft').to.be.gte($div.width())
        })
      
    })

    it('should be fetch featured list', () => {
  
        cy.get('#featured').wait(3000).should('have.length.greaterThan', 0)

        cy.get('#featured').parent().find('[data-icon="chevron-right"]').click()

        cy.get('#featured').should(($div) => {
            expect($div.scrollLeft(), 'scollLeft').to.be.gte($div.width())
        })
      
    })

    it('should be fetch category list', () => {

        cy.get('#browse').wait(3000).should('have.length.greaterThan', 0)

        cy.get('#browse').parent().find('[data-icon="chevron-right"]').click()

        cy.get('#browse').should(($div) => {
            expect($div.scrollLeft(), 'scollLeft').to.be.gte($div.width())
        })
      
    })
  
  })
  