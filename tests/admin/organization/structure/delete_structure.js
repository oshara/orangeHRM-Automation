import { StructurePage } from "../../../../pages/admin/oragnizations/structure/structure";
import { loginValid } from "../../../login/login_valid"
import { navigateToStructure } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";

export const deleteAddedStructureFunc =async(page)=>{


    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateToStructure(page);

    const StructureObj = new StructurePage(page);

    await StructureObj.deleteAddedStructure('Client Services');
    await page.pause();
}