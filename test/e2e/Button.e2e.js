describe('Button', () => {

  it('should have button', () => {
    browser.get('?selectedKind=Components&selectedStory=Button');
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf($('#storybook-preview-iframe')), 20000);
    browser.switchTo().frame('storybook-preview-iframe');

    expect($('#main-example').getText()).toBe('Click Me!');
  }, 30000);
});
