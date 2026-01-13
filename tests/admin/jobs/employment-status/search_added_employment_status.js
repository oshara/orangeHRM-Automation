import { EmploymentStatusPage } from "../../../../pages/admin/job/employment-status/employmentStatus";
import { loginValid } from "../../../login/login_valid"
import { navigateEmploymentStatus } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";

export const searchAddedEmployStatus = async(page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateEmploymentStatus(page);

    const EmploymentStatusObj = new EmploymentStatusPage(page);
    await EmploymentStatusObj.searchAddedEmployeeStatus('Full-Time Permanent');
    await page.waitForTimeout(3000);
}