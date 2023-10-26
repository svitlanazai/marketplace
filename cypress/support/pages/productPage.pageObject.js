import PageObject from '../PageObject';

class ProductPageObject extends PageObject {

  get productTitle() {
    return cy.getByDataAtr('product-title')
  }

  assertProductTitle(searchText) {
    this.productTitle
    .should('contain', searchText)
  }

  openSearchProduct(title) {
    this.productCard
    .contains(title)
    .click()
  }
}

export default ProductPageObject;
