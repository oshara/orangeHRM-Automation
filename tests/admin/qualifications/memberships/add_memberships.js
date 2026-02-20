import { MembershipsPage } from "../../../../pages/admin/qualifications/memberships/memberships";
import { loginValid } from "../../../login/login_valid"
import { navigateToMemberships } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";

export const addMembershipsFunc = async(page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateToMemberships(page);

    const MembershipObj = new MembershipsPage(page);
    await MembershipObj.addNewMembership("Life Time Membership");
    
}