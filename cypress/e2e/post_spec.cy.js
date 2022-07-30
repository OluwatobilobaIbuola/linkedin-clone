describe('post', () => {
  it('user can post to feed', () => {
    cy.visit('/');
    cy.get('[placeholder="Email"]').type("dotun@gmail.com");
    cy.get('[placeholder="Password"]').type("Dotun@1234");
    cy.findByRole('button', { name: /sign in/i }).click();
    cy.get('#Post').type("I am very blessed today. I am testing");
    cy.get('[data-test="form-data"]').submit();
  })
})