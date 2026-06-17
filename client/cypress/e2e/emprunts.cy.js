describe("Test E2E Emprunts", () => {
  it("Affiche les emprunts d'un utilisateur", () => {
    cy.visit("http://localhost:5173/emprunts");

    cy.get("input").first().type("jean.dupont@biblio.com");

    cy.get("button").click();

    cy.contains("Le Petit Prince").should("exist");
    cy.contains("Antoine de Saint-Exupéry").should("exist");
    cy.contains("2026").should("exist");
  });
});