//your JS code here. If required.
describe('Sorted Articles', () => {
  const baseUrl = 'http://localhost:3000';

  it('should display the sorted articles list', () => {
    cy.visit(baseUrl + "/main.html");
    cy.get('#bands').should('be.visible');

    // Wait for JavaScript to finish rendering
    cy.wait(1000);

    cy.get('ul li:nth-child(1)').should('contain', 'Anywhere But Here');
    cy.get('ul li:nth-child(2)').should('contain', 'The Bled');
    cy.get('ul li:nth-child(3)').should('contain', 'Counterparts');
    cy.get('ul li:nth-child(4)').should('contain', 'The Devil Wears Prada');
    cy.get('ul li:nth-child(5)').should('contain', 'The Midway State');
    cy.get('ul li:nth-child(6)').should('contain', 'Norma Jean');
    cy.get('ul li:nth-child(7)').should('contain', 'Oh, Sleeper');
    cy.get('ul li:nth-child(8)').should('contain', 'An Old Dog');
  });
});