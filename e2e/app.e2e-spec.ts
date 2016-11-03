import { CompoCommunicationPage } from './app.po';

describe('compo-communication App', function() {
  let page: CompoCommunicationPage;

  beforeEach(() => {
    page = new CompoCommunicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
