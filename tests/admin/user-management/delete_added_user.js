import {test} from '@playwright/test';
import { loginValid } from '../../login/login_valid';
import { AdminPage } from '../../../pages/admin/user-management/users/admin';
import { navigateToAdminMenu } from '../../menu-navigation/navigation_menus';

export const deleteUserTest = async (page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);

    const AdminObj = new AdminPage(page);
    await AdminObj.searchUserByUserNameFunc("tim1235");
    await AdminObj.clickSearchUserBtn();
    await page.waitForTimeout(4000);
    await AdminObj.deleteUserFun();
}