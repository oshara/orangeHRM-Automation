import { EmergencyContactsPage } from "../../../pages/myInfo/emergency-contacts/emergencyContacts";
import { loginValid } from "../../login/login_valid"
import { emergencyContactMenuNav } from "../../menu-navigation/my-infor-navigations/my_infor_navigations";
import { navigateToMyInfoMenu } from "../../menu-navigation/navigation_menus";
import { addEmergencyContactFunc } from "./emergency_contacts";

export const searchAddedEmergencyContact = async(page) => {


    const contactName = await addEmergencyContactFunc(page);
    const EmergencyContactObj = new EmergencyContactsPage(page);
    await EmergencyContactObj.searchAddedEmergencyContact(contactName);

}