// Test Suite
describe('plants', () => {
  beforeEach(() => {
    cy.exec('yarn knex seed:run')
  })
  // Test Case
  it('should add 1 + 1 correctly', () => {
    expect(1 + 1).eq(2)
  })

  it('should return hello world on route /', () => {
    cy.request('http://localhost:3000/')
      .should((response) => {
        expect(response.status).to.eq(200)

        expect(response.body).to.have.property('msg').and.be.eq('Hello World')
      })
  })

  // check that /plants/1 returns a Cactus
  it('should return hello world on route /', () => {
    cy.request('http://localhost:3000/plants/1')
      .should((response) => {
        expect(response.status).to.eq(200)

        expect(response.body).to.have.property('name').and.be.eq('Cactus')
      })
  })

  // check that the home page displays heading
  it('should display Welcome to Your Vue.js App on the home page', () => {
    cy.visit('http://localhost:8080')
    cy.contains('Welcome to Your Vue.js App').should('exist')
  })

  it('should display the Cactus on the home page', () => {
    cy.visit('http://localhost:8080')
    cy.get('h2').contains('Cactus').should('exist')
    cy.get('h2').contains('Monstera').should('exist')
  })

  it('should return gabes email address', () => {
    cy.visit('http://localhost:8080')
    cy.contains('Cactus').click()
    cy.contains('gabe@codecampleipzig.de').should('exist')
  })
})
