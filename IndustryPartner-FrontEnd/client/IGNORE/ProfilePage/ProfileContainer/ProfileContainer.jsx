import Headline from "../Headline/Headline";
import Diligence from "../Diligence/Diligence";
import Qualifications from "../Qualifications/Qualifications";
import Achievements from "../Achievements/Achievements";
import TechnicalSkills from "../TechnicalSkills/TechnicalSkills";
import TrainingProgress from "../TrainingProgress/TrainingProgress";
import Feedback from "../Feedback/Feedback";
import Flair from "../Flair/Flair";
import PersonalityType from "../PersonalityType/PersonalityType";

import testData from '../../../utils/testData/testData.js'
const graduate = testData.graduate;

const ProfileContainer = () => {


    const headlineInfo = {
        name: `${graduate.firstName} ${graduate.lastName}`,
        image: graduate.profileImage,
        pronouns: graduate.pronouns,
        headline: graduate.headline,
        socialMedia: graduate.socialMedia,
        dfSubject: graduate.dfSubject,
        dfGraduationDate: graduate.dfGraduationDate
    };

    return (
        <div className="container-fluid" >
            <div className="row justify-content-center">
                <div className="col-10">
                    <Headline headlineInfo={headlineInfo} />
                    <PersonalityType personality={graduate.personalityType} />
                    <Diligence diligence={graduate.diligence} />
                    <Qualifications qualifications={graduate.qualifications} />
                    <Achievements achievements={graduate.achievements} />
                    <TechnicalSkills technicalSkills={graduate.technicalSkills} />
                    <TrainingProgress trainingProgess={graduate.trainingProgress} />
                    <Feedback feedback={graduate.feedback} />
                    <Flair flair={graduate.flair} />
                </div>
            </div>
        </div>
    )

}

export default ProfileContainer;