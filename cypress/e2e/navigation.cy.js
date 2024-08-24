describe('Navigation Tests', () => {
    beforeEach(() => {
      // Visit the homepage before each test
      cy.visit('http://localhost:3000');
    });
  
    it('should navigate to the About page when the About button is clicked', () => {
      // Click the 'About' button
      cy.contains('About').click();
  
      // Verify that the URL is correct
      cy.url().should('eq', 'http://localhost:3000/about');
      cy.contains('About').should('be.visible');
    });
  
    it('should navigate to the Home page when the Home button is clicked', () => {
      cy.contains('Home').click();
      cy.url().should('eq', 'http://localhost:3000/');
  
      // Optionally, verify that the Home page contains expected content
      cy.contains('Disko').should('be.visible');
    });
  
    it('should navigate to the Start Disko page when the Start Disko button is clicked', () => {
      // Click the 'Start Disko' button
      cy.contains('Start Disko').click();
      cy.url().should('eq', 'http://localhost:3000/statistics');
      cy.contains('Cluster').should('be.visible');
    });
  });
  