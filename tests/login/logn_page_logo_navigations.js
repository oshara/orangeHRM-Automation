import {chromium, expect, test} from '@playwright/test';
import { QA_ENV } from '../../configs/qa.env';


export const navigatesToOranageHRMSite = async()=>{

    const browser = await chromium.launch();

    const context = await browser.newContext();

    const page1 = await context.newPage();

    await page1.goto(QA_ENV.baseURL);

    const pagePromise = context.waitForEvent('page');
    
    await page1.locator('//a[@href="http://www.orangehrm.com"]').click();
    const page2 = await pagePromise;


    await expect(page2).toHaveURL("https://orangehrm.com/");


}


export const navigateLinkedInSite = async() =>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto(QA_ENV.baseURL);

    const pagePromise = context.waitForEvent('page');

    await page1.locator('//a[@href="https://www.linkedin.com/company/orangehrm/mycompany/"]').click();

    const page2 = await pagePromise;

    await expect(page2).toHaveURL('https://www.linkedin.com/company/orangehrm');

    await page2.waitForTimeout(2000);

}

export const navigateFaceBook = async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto(QA_ENV.baseURL);

    const pagePromise = context.waitForEvent('page');

    await page1.locator('//a[@href="https://www.facebook.com/OrangeHRM/"]').click();

    const page2 = await pagePromise;

    await expect(page2).toHaveURL('https://www.facebook.com/OrangeHRM/');
    await page2.waitForTimeout(2000);

}


export const twitterPage = async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto(QA_ENV.baseURL);

    const pagePromise = context.waitForEvent('page');

    await page1.locator('//a[@href="https://twitter.com/orangehrm?lang=en"]').click();

    const page2 = await pagePromise;

    await expect(page2).toHaveURL('https://x.com/orangehrm?lang=en');

    await page2.waitForTimeout(2000);

}

export const navigateToYouTube = async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto(QA_ENV.baseURL);

    const pagePromise = context.waitForEvent('page');

    await page1.locator('//a[@href="https://www.youtube.com/c/OrangeHRMInc"]').click();

    const page2 = await pagePromise;

    await expect(page2).toHaveURL('https://www.youtube.com/c/OrangeHRMInc');

    await page2.waitForTimeout(2000);
}
