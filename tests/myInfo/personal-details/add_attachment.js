import { QA_ENV } from "../../../configs/qa.env";
import { PersonalDetailsPage } from "../../../pages/myInfo/persernal-details/personalDetails";
import { loginValid } from "../../login/login_valid"
import { navigateToMyInfoMenu } from "../../menu-navigation/navigation_menus";

 export const addAttachmentFunc = async(page)=>{
   await loginValid(page);
   await navigateToMyInfoMenu(page);

   const PersonalDetailsObj = new PersonalDetailsPage(page);
   await PersonalDetailsObj.addAttachmentFile(QA_ENV.myInfor.personalInfor.attachmentFilePath,QA_ENV.myInfor.personalInfor.comment);
 }