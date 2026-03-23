import { QA_ENV } from "../../../configs/qa.env";
import { PersonalDetailsPage } from "../../../pages/myInfo/persernal-details/personalDetails";
import { loginValid } from "../../login/login_valid"
import { navigateToMyInfoMenu } from "../../menu-navigation/navigation_menus";

export const editCustomFields = async(page)=>{

    await loginValid(page);
    await navigateToMyInfoMenu(page);
    
    const PersonalDetailsObj = new PersonalDetailsPage(page);

    await PersonalDetailsObj.editNamesFields(QA_ENV.myInfor.personalInfor.firstName,QA_ENV.myInfor.personalInfor.middleName,QA_ENV.myInfor.personalInfor.lastName);
   


}

export const editEmployeeIDFunc = async(page)=>{

    await loginValid(page);
    await navigateToMyInfoMenu(page);

    const PersonalDetailObj = new PersonalDetailsPage(page);
    await PersonalDetailObj.editEmployeeID(QA_ENV.myInfor.personalInfor.employeeID,QA_ENV.myInfor.personalInfor.otherID)

 }

 export const editDrivingLicenseFunc = async(page)=>{

    await loginValid(page);
    await navigateToMyInfoMenu(page);

    const PersonalDeatailObj = new PersonalDetailsPage(page);
    await PersonalDeatailObj.editDrivingLicencse(QA_ENV.myInfor.personalInfor.drivingLicenseNum,QA_ENV.myInfor.personalInfor.drivingLicensNumExpDate);
    

 }

