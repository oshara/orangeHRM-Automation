import { QA_ENV } from "../../../../configs/qa.env";
import { StructurePage } from "../../../../pages/admin/oragnizations/structure/structure";
import { loginValid } from "../../../login/login_valid"
import { navigateToStructure } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";

export const addNewStructureFunc = async(page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateToStructure(page);

    const StructureObj = new StructurePage(page);
    await StructureObj.addNewStructure(QA_ENV.oragnizationInfor.structureInfor.unitId,QA_ENV.oragnizationInfor.structureInfor.name,QA_ENV.oragnizationInfor.structureInfor.description);

}