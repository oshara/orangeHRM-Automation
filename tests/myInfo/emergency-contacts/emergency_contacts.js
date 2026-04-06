import { QA_ENV } from "../../../configs/qa.env";
import { EmergencyContactsPage } from "../../../pages/myInfo/emergency-contacts/emergencyContacts";
import { loginValid } from "../../login/login_valid"
import { emergencyContactMenuNav } from "../../menu-navigation/my-infor-navigations/my_infor_navigations";
import { navigateToMyInfoMenu } from "../../menu-navigation/navigation_menus";

export const addEmergencyContactFunc = async(page)=>{

    await loginValid(page);
    await navigateToMyInfoMenu(page);
    await emergencyContactMenuNav(page);

    const EmergencyContactObj = new EmergencyContactsPage(page);
    await EmergencyContactObj.addEmergencyContact(QA_ENV.myInfor.emergencyContactDetails.name,QA_ENV.myInfor.emergencyContactDetails.relationshipName,QA_ENV.myInfor.emergencyContactDetails.homeTelephoneNumber,QA_ENV.myInfor.emergencyContactDetails.mobileTelephoneNumber,QA_ENV.myInfor.emergencyContactDetails.workTelephoneNumber);

}

export const addEmergencyContactAttachmentFunc = async(page)=>{
    await loginValid(page);
    await navigateToMyInfoMenu(page);
    await emergencyContactMenuNav(page);

    const EmergencyContactObj = new EmergencyContactsPage(page);
    await EmergencyContactObj.addAttachment(QA_ENV.myInfor.emergencyContactDetails.filePath,QA_ENV.myInfor.emergencyContactDetails.emergencyComment);
  
}