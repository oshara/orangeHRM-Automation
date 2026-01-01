import {test} from '@playwright/test';
import { QA_ENV } from '../../../configs/qa.env';
import { loginValid } from '../../login/login_valid';
import { navigateToAdminMenu } from '../../menu-navigation/navigation_menus';
import { AdminPage } from '../../../pages/admin/user-management/users/admin';

export const searchUserTest = async(page)=>{ 

    await loginValid(page);
    await navigateToAdminMenu(page);

    const AdminObj = new AdminPage(page);

    await AdminObj.searchUserByUserNameFunc("tim1235");
    await AdminObj.clickSearchUserBtn();
    await page.waitForTimeout(4000);
    await AdminObj.verifyAddedUser("tim1235");
}