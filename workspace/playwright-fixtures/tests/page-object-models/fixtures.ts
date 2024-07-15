import { test as base } from '@playwright/test';
import { LandingPageModel } from './landingPageModel';
import { DocsPageModel } from './docsPageModel';

// Declare the types of your fixtures.
type MyFixtures = {
    landingPageModel: LandingPageModel;
    docsPageModel: DocsPageModel;
};

export const test = base.extend<MyFixtures>({
    landingPageModel: async ({ page }, use) => {
        const landingPage = new LandingPageModel(page);
        await landingPage.goto();
        await landingPage.getStarted();
    },
    docsPageModel: async ({ page }, use) => {
        const docsPage = new DocsPageModel(page);
        await docsPage.goto();
        await docsPage.pageObjectModel();
    },
});

export { expect } from '@playwright/test';
