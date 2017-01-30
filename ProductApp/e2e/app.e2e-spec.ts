import { ProductAppPage } from './app.po';

describe('product-app App', function() {
  let page: ProductAppPage;

  beforeEach(() => {
    page = new ProductAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
