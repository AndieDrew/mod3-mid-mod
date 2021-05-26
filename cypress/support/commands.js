Cypress.Commands.add('load', () => {
  cy.intercept('http://localhost:3001/api/v1/reservations',
    [{
      id: 1,
      name: "Christie",
      date: "12/29",
      time: "7:00",
      number: 12
    }]
  )
  cy.visit('http://localhost:3000');
})
