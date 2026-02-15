import { LicensesPage } from "../../../../pages/admin/qualifications/lisences/lisences";
import { loginValid } from "../../../login/login_valid"
import { navigateToLisences, navigateToSkills } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";

export const addLicenseFunc = async(page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateToLisences(page);


    const licenseName = "Test License";
    const licensesPage = new LicensesPage(page);
    await licensesPage.addNewLicense(licenseName);
}