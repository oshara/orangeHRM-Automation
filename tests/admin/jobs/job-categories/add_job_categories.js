import { JobCategoriesPage } from "../../../../pages/admin/job/job-categories/jobCategoriesStatus";
import { loginValid } from "../../../login/login_valid"
import { navigateJobCategories } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";

export const addJobCategoryFun =async(page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateJobCategories(page);

    const JobCategoriesObj = new JobCategoriesPage(page);

    const jobCategoryName = `Job Category _${Date.now()}`
    await JobCategoriesObj.addJobCategory(jobCategoryName);
    await page.waitForTimeout(3000);
    return jobCategoryName;

}