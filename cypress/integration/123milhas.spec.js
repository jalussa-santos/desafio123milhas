/// <reference types="cypress" />

describe('123milhas', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Buscar hotel', () => {
    cy.get('#hoteis > .nav-link > .description-tab').click()
  })
})