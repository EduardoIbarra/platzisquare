import { PlatzisquarePage } from './app.po';

describe('platzisquare App', () => {
  let page: PlatzisquarePage;

  beforeEach(() => {
    page = new PlatzisquarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
