import { LicensesPage } from "../../../../pages/admin/qualifications/lisences/lisences";
import { loginValid } from "../../../login/login_valid"
import { navigateToLisences } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";

export const deleteLicenseFunc = async(page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateToLisences(page);

    const LicensesPageObj = new LicensesPage(page);
    await LicensesPageObj.deleteAddedLicense('Microsoft Certified Systems Engineer (MCSE)');
}