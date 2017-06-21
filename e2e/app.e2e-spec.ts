import { EarthquakedataPage } from './app.po';

describe('earthquakedata App', () => {
  let page: EarthquakedataPage;

  beforeEach(() => {
    page = new EarthquakedataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
