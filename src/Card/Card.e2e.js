import eyes from 'eyes.it';

describe('Card and Grid', () => {
  eyes.it('should not break design', () => {

    const element = $('[data-hook="card-example"]');

    browser.get('iframe.html?selectedKind=4.%20Layouts&selectedStory=4.5%20GridWithCardLayout');

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element), 15000);
  });
});
