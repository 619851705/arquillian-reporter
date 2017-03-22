import { MyFirstPage } from './app.po';

describe('my-first App', () => {
  let page: MyFirstPage;

  beforeEach(() => {
    page = new MyFirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
