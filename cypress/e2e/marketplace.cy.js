/// <reference types='cypress' />

import HomePageObject from '../support/pages/home.pageObject';
import ProductPageObject from '../support/pages/productPage.pageObject';
import SearchPageObject from '../support/pages/searchResultPage.pageObject';

const homePage = new HomePageObject();
const searchResultPage = new SearchPageObject();
const productPage = new ProductPageObject();

const searchText = 'Clip-clap';
const searchText2 = 'STAR WARS';

beforeEach(() => {
  cy.visit('');
})

describe('Marketplace', () => {
  it('should provide an ability to search product by title', () => {
    homePage.typeSearchText(searchText);
    homePage.clickSearchBtn();

    searchResultPage.assertUrl(searchText);
    searchResultPage.openSearchProduct(searchText);
    
    productPage.assertProductTitle(searchText);
  });

  context('Errors', () => {
    it('should show error message ', () => {
      cy.emulateEmptySearchResult();

      homePage.typeSearchText('STAR WARS');
      homePage.clickSearchBtn();         
      cy.wait('@getEmptyResult');

      searchResultPage.assertFirstProduct(searchText2);
      searchResultPage.assertLastProduct(searchText2);
    });
  })

    it('should assert that products on the first and second pages are different', () => {
      let firstPageProducts = [];

      homePage.firstPageProducts.each(($product) => {
          firstPageProducts.push($product.text());
      });
           
      homePage.secondPageProducts.each(($product) => {
          expect(firstPageProducts).to.not.include($product.text());
      });
    });
})