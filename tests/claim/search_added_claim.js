import { QA_ENV } from "../../configs/qa.env";
import { ClaimPage } from "../../pages/claim/claim";
import { navigateToEmployeeClaiMenu } from "../menu-navigation/claim-menu-navigations/claim_navigations";
import { addClaimFunc } from "./add_claim";


export const searchAddedClaimFunc =async(page)=>{

    const [employeeHalfName, employeeName] = await addClaimFunc(page);

    await navigateToEmployeeClaiMenu(page);

    const ClaimObj = new ClaimPage(page);
    await ClaimObj.searchAddedClaim(employeeName, employeeHalfName);
}