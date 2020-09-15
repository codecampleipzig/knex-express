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
})
