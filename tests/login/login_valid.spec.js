import {test} from '@playwright/test';
import { QA_ENV  } from '../../configs/qa.env';
import { LoginPage } from '../../pages/login.js';

export const loginValid = async(page)=>{

    const LoginObj = new LoginPage(page);

    await page.goto(QA_ENV.baseURL);
    await LoginObj.login(QA_ENV.credentials.user.username,QA_ENV.credentials.user.password);
    await page.waitForTimeout(5000);

}