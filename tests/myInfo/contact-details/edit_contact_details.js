import { QA_ENV } from "../../../configs/qa.env";
import { ContactDetailsPage } from "../../../pages/myInfo/contact-details/contactDetails";
import { loginValid } from "../../login/login_valid"
import { contactMenuNav } from "../../menu-navigation/my-infor-navigations/my_infor_navigations";
import { navigateToMyInfoMenu } from "../../menu-navigation/navigation_menus";

export const editContactDetailsFunc= async(page)=>{

    await loginValid(page);
    await navigateToMyInfoMenu(page);
    await contactMenuNav(page);

    const ContactDetailsObj = new ContactDetailsPage(page);
    await ContactDetailsObj.fillAddressDetails(QA_ENV.myInfor.contactDetails.address1,QA_ENV.myInfor.contactDetails.address2,QA_ENV.myInfor.contactDetails.city,QA_ENV.myInfor.contactDetails.state,QA_ENV.myInfor.contactDetails.zipcode,QA_ENV.myInfor.contactDetails.country);

}