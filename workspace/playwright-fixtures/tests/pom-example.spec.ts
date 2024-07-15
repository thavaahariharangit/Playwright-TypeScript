import { test, expect } from './page-object-models/fixtures';


test('Get started link is working as expected', async ({ landingPageModel, docsPageModel }) => {
    await landingPageModel.goto();
    await landingPageModel.getStarted();
    await expect(docsPageModel.installation).toBeVisible();
});

test('should show Page Object Model article', async ({ docsPageModel }) => {
    await docsPageModel.goto();
    await docsPageModel.pageObjectModel();
    await expect(docsPageModel.article).toContainText('Page Object Model is a common pattern');
});