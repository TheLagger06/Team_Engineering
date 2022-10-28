import React from 'react'
import { useLocation } from 'react-router-dom';
//import redReject from '../ViewProfilePage/img/redReject.svg';
import testData from '../../utils/testData/testData.js'
import ProfileCard from './ProfileCard';
import DueDiligenceCard from './DueDiligenceCard';
import BadgesCard from './BadgesCard';
import PersonalityType from './PersonalityType';
import TrainingProgressCard from './TrainingProgressCard';
import TechnicalSkills from './TechnicalSkills';
import QualificationsCard from './QualificationsCard';
import AchievementsCard from './AchievementsCard';
import FeedbackCard from './FeedbackCard';
import FlairCard from './FlairCard.jsx';
import ProfessionalSkills from './ProfessionalSkills.jsx';

import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

const graduate = testData.graduate;


const ViewProfile = () => {

  const location = useLocation();

  const graduateId = location.state._id;
  const allGraduates = location.state.graduates;

  const filteredGraduates = allGraduates.filter(graduate => graduate._id === graduateId);

  const graduate = filteredGraduates[0]

  return (
    <>

      <Header />
      <div className="container py-5">
        <div className="row">
          {/* left column */}
          <div className="col-lg-3">
            <ProfileCard graduate={graduate} />
            <DueDiligenceCard diligence={graduate.diligence} />
            <BadgesCard badges={graduate.badges} />
          </div>

          {/* middle column */}
          <div className="col-lg-6" style={{ paddingLeft: "0px" }}>
            <PersonalityType personalityType={graduate.personalityType} firstName={graduate.firstName} />
            <TrainingProgressCard training={graduate.trainingProgress} />
            <TechnicalSkills technicalSkills={graduate.technicalSkills} />
            <ProfessionalSkills professionalSkills={graduate.professionalSkills} />
            <FeedbackCard feedback={graduate.feedback} />
          </div>

          {/* Third column */}
          <div className="col-lg-3">
            <div className="row">
              <QualificationsCard qualifications={graduate.qualifications} />
            </div>
            <div className='row'>
              <AchievementsCard achievements={graduate.achievements} />
            </div>
            <div className='row'>
              <FlairCard flairs={graduate.flair} />
            </div>
          </div >
        </div >
      </div >
      <Footer />
    </>
  )
}

export default ViewProfile;