import { QA_ENV } from "../../../configs/qa.env";
import { PersonalDetailsPage } from "../../../pages/myInfo/persernal-details/personalDetails";
import { loginValid } from "../../login/login_valid"
import { navigateToMyInfoMenu } from "../../menu-navigation/navigation_menus";

export const editCustomFields = async(page)=>{

    await loginValid(page);
    await navigateToMyInfoMenu(page);
    
    const PersonalDetailsObj = new PersonalDetailsPage(page);

    await PersonalDetailsObj.editNamesFields(QA_ENV.myInfor.personalInfor.firstName,QA_ENV.myInfor.personalInfor.middleName,QA_ENV.myInfor.personalInfor.lastName);
    await page.pause();


}