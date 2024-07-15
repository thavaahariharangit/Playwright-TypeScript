import { test, expect } from './page-object-models/fixtures';

test('Get started link is working as expected @Canada', async ({ landingPage, docsPage }) => {
    await landingPage.goto();
    await landingPage.getStarted();
    await expect(docsPage.installation).toBeVisible();
});

test('should show Page Object Model article', async ({ docsPage }) => {
    await docsPage.goto();
    await docsPage.pageObjectModel();
    await expect(docsPage.article).toContainText('Page Object Model is a common pattern');
});