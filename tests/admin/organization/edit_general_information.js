import { GeneralInformationPage } from "../../../pages/admin/oragnizations/general-information/generalInformation";
import { loginValid } from "../../login/login_valid"
import { navigateToGeneralInformation } from "../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../menu-navigation/navigation_menus";
import { QA_ENV } from "../../../configs/qa.env";

export const editGeneralInfor = async(page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateToGeneralInformation(page);

    const GeneralInforObj = new GeneralInformationPage(page);
    await GeneralInforObj.editGenerationalInformation(QA_ENV.oragnizationInfor.generalInfor.organizationName,QA_ENV.oragnizationInfor.generalInfor.employeeNumber,QA_ENV.oragnizationInfor.generalInfor.registrationNumber,QA_ENV.oragnizationInfor.generalInfor.taxIdNumber,QA_ENV.oragnizationInfor.generalInfor.phoneNumber,QA_ENV.oragnizationInfor.generalInfor.faxNumber,QA_ENV.oragnizationInfor.generalInfor.email,QA_ENV.oragnizationInfor.generalInfor.address1,QA_ENV.oragnizationInfor.generalInfor.address2,QA_ENV.oragnizationInfor.generalInfor.cityName,QA_ENV.oragnizationInfor.generalInfor.stateName,QA_ENV.oragnizationInfor.generalInfor.zipCode,QA_ENV.oragnizationInfor.generalInfor.countryName,QA_ENV.oragnizationInfor.generalInfor.note);
  
}