import {test} from '@playwright/test';
import { loginValid } from '../../../login/login_valid';
import { navigateToAdminMenu } from '../../../menu-navigation/navigation_menus';
import { navigateJobTitle } from '../../../menu-navigation/admin-menu-navigations/admin_menu_navigations';
import { JobTitlePage } from '../../../../pages/admin/job/job-titles/jobTitles';

export const searchAddedJob = async (page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateJobTitle(page);

    const JobTitleObj = new JobTitlePage(page);
    await JobTitleObj.searchJobInTable("HR Manager");
    await page.waitForTimeout(3000);


}