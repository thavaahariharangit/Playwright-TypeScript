import { test as base } from '@playwright/test';
import { LandingPageModel } from './landingPageModel';
import { DocsPageModel } from './docsPageModel';

// Declare the types of your fixtures.
type MyFixtures = {
    landingPage: LandingPageModel;
    docsPage: DocsPageModel;
};

export const test = base.extend<MyFixtures>({
    landingPage: async ({ page }, use) => {
        const landingPage = new LandingPageModel(page);
        await landingPage.goto();
        await landingPage.getStarted();
        // Use the fixture value in the test.
        await use(landingPage);
    },
    docsPage: async ({ page }, use) => {
        const docsPage = new DocsPageModel(page);
        await docsPage.goto();
        await docsPage.pageObjectModel();
        await use(docsPage);
    },
});
export { expect } from '@playwright/test';