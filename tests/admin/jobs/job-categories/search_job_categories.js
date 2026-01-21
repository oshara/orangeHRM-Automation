import { JobCategoriesPage } from "../../../../pages/admin/job/job-categories/jobCategoriesStatus";
import { loginValid } from "../../../login/login_valid"
import { navigateJobCategories } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";

export const searchJobCategoriesFunc = async(page,jobCategoryName)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateJobCategories(page);

    const JobCategoriesObj = new JobCategoriesPage(page);
    await JobCategoriesObj.searchAddedJobCategory(jobCategoryName);
    await page.waitForTimeout(3000);
}