import { QA_ENV } from "../../../configs/qa.env";
import { CandidatesPage } from "../../../pages/recruitment/candidates/candidates";
import { loginValid } from "../../login/login_valid"
import { navigateToRecruitmentMenu } from "../../menu-navigation/navigation_menus";

export const addNewCandidateFunc =async(page)=>{

    await loginValid(page);
    await navigateToRecruitmentMenu(page);

    const CandidateObj = new CandidatesPage(page);
    await CandidateObj.addNewCandidate(QA_ENV.recruitment.candidates.firstName,QA_ENV.recruitment.candidates.middleName,QA_ENV.recruitment.candidates.lastName,QA_ENV.recruitment.candidates.vacancyName,QA_ENV.recruitment.candidates.email,QA_ENV.recruitment.candidates.contactNumber,QA_ENV.recruitment.candidates.filePath,QA_ENV.recruitment.candidates.keywords,QA_ENV.recruitment.candidates.dateOfApplication,QA_ENV.recruitment.candidates.notes);

    return QA_ENV.recruitment.candidates.vacancyName;

}