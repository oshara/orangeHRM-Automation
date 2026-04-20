import { CandidatesPage } from "../../../pages/recruitment/candidates/candidates";
import { loginValid } from "../../login/login_valid"
import { navigateToRecruitmentMenu } from "../../menu-navigation/navigation_menus";
import { addNewCandidateFunc } from "./add_new_candidates";

export const searchAddedCandidate = async(page)=>{


    const vacancyName = await addNewCandidateFunc(page)

    const CandidateObj = new CandidatesPage(page);
    await CandidateObj.searchAddedCandidate(vacancyName);

    



}