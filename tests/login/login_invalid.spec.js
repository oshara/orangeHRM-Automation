import {test} from '@playwright/test';
import { QA_ENV } from '../../configs/qa.env';  
import { LoginPage } from '../../pages/login';

test('Try to Login to the Orange HRM site with invalid credenitals',async({page})=>{

    const LoginObj = new LoginPage(page);
    await page.goto(QA_ENV.baseURL);
    await LoginObj.login(QA_ENV.credentials.invalidUser.username, QA_ENV.credentials.invalidUser.password)
    await page.waitForTimeout(4000);
    
})