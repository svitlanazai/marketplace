import PageObject from '../PageObject';

class HomePageObject extends PageObject {
  url = '';

  get searchField() {
    return cy.get('.sc-iIUQWv');
  }

  get searchBtn() {
    return cy.get('.sc-fotOHu.exrPqG');
  }

  get firstPageProducts() {
    return cy.getByDataAtr('product-card');
  }

  get secondPageProducts() {
    cy.get('.sc-bXdNzS').scrollTo('bottom')
      return cy.getByDataAtr('product-card');
  }

  typeSearchText(text) {
    this.searchField
      .type(text)
      .type('{enter}');
  }

  clickSearchBtn() {
    this.searchBtn
      .click();
  }
}

export default HomePageObject;
