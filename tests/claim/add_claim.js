import { QA_ENV } from "../../configs/qa.env";
import { ClaimPage } from "../../pages/claim/claim";
import { loginValid } from "../login/login_valid"
import { navigateToClaimMenu } from "../menu-navigation/navigation_menus";

export const addClaimFunc = async(page)=>{

    await loginValid(page);
    await navigateToClaimMenu(page);

    const ClaimObj = new ClaimPage(page);

    await ClaimObj.fillClaimForm(QA_ENV.claim.employeeName,QA_ENV.claim.event,QA_ENV.claim.currency,QA_ENV.claim.remarks);
}