class HomePage {
    constructor(page) {
      this.page = page;
      this.titleSelector = 'h1'; // Example selector for the page title
      this.navBarSelector = 'nav'; // Example selector for the navigation bar
    }
  
    // A method to get the page title
    async getTitle() {
      return await this.page.title();
    }
  
    // A method to check if the navigation bar is visible
    async isNavBarVisible() {
      return await this.page.isVisible(this.navBarSelector);
    }
  
    // A method to navigate to a specific URL
    async goToHomePage() {
      await this.page.goto('https://playwright.dev');
    }
  }
  
  module.exports = HomePage;
  