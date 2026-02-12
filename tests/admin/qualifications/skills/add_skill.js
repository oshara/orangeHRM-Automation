import { SkillsPage } from "../../../../pages/admin/qualifications/skills/skills";
import { loginValid } from "../../../login/login_valid"
import { navigateToSkills } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";
import { QA_ENV } from "../../../../configs/qa.env";    

export const addNewSkillFunc =async (page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateToSkills(page);

    const SkillsObj = new SkillsPage(page);
    await SkillsObj.addNewSkill(QA_ENV.skillsInfor.skillName,QA_ENV.skillsInfor.description)

}