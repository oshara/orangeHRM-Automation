import { test } from '@playwright/test';
import { JobTitlePage } from '../../../../pages/admin/job/job-titles/jobTitles.js';
import { loginValid } from '../../../login/login_valid';
import { navigateToAdminMenu } from '../../../menu-navigation/navigation_menus';
import { navigateJobTitle } from '../../../menu-navigation/admin-menu-navigations/admin_menu_navigations';

export const addJob = async ({page}) => {

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateJobTitle(page);

    const JobTitleObj = new JobTitlePage(page);
    await JobTitleObj.addJobTitleBtn();

    const jobTitleName = `Job Title for HR _${Date.now()}`;
    await JobTitleObj.fillJobTitle(jobTitleName);
    await JobTitleObj.fillJobDescription("This is a job application for HR position");
    await JobTitleObj.uploadJobSpecification('assets/sample1.pdf');

    await JobTitleObj.fillAddNote("This is note for the HR job position that is going to be applied");
    await JobTitleObj.savejobTilteBtn();
    await JobTitleObj.getSuccessToastMessage('Successfully Saved');



}