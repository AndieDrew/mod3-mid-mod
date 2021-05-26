describe('Details', () => {
  beforeEach(() => {
    cy.load()
  });
  it('Should show all reservations', () => {
    cy.get('.app-title').should('be.visible')
    cy.get('.card').should('be.visible')
      .get('h3').contains('Christie')
  })
  it('Should show a reservation form', () => {
    cy.get('.resy-form').should('be.visible')
      .get('.form').should('be.visible')
    cy.get('.name').should('be.visible')
    cy.get('.name').invoke('attr', 'placeholder').should('contain', 'Name')
  })
  it('Should submit a new reservation', () => {
    cy.get('.name').should('have.value', '')
      .get('.name').type('Andrew')
      .get('.name').should('have.value', 'Andrew')

      .get('.date').should('have.value', '')
      .get('.date').type('03/05')
      .get('.date').should('have.value', '03/05')

      .get('.time').should('have.value', '')
      .get('.time').type('7:00')
      .get('.time').should('have.value', '7:00')

      .get('.number').should('have.value', '')
      .get('.number').type('5')
      .get('.number').should('have.value', '5')

      .get('button').click()
      .get('h3').contains('Andrew')
      .get('p').contains('03/05')

  })
});
