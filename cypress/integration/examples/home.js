describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('http://localhost:3000') // change URL to match your dev URL
      cy.pause()
      cy.get('.container')
      cy.get('.title')
      cy.get('.Description')
      cy.get('.Button')
      
    })
  })

 