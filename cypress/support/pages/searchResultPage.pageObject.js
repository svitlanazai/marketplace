import PageObject from '../PageObject';

class SearchPageObject extends PageObject {

  get productCard() {
    return cy.getByDataAtr('product-card');
  }

  assertUrl(searchText) {
    cy.url().should('contain', `q=${searchText}`);
  }

  openSearchProduct(title) {
    this.productCard
      .first()
      .contains(title)
      .click();
  }

  assertFirstProduct(title) {
    this.productCard
      .first()
      .should('contain.text', title);
  }

  assertLastProduct(title) {
    this.productCard
      .last()
      .should('contain.text', title);
  } 
}

export default SearchPageObject;
