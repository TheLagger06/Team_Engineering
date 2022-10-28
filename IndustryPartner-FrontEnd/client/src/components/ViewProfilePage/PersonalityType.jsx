import React from 'react'
import personalityImagePlaceholder from './img/personality-Logistician-ISTJ.png'

const PersonalityType = ({ personalityType, firstName }) => {

  return (
    <div className="card mb-4">
      {/* <div className="card-body"> */}
      <h5 className="card-header text-center" style={{ color: 'white', backgroundColor:'#3B8BC9' }}>Personality Type</h5>
      <div className="card-body text-justified-center">
      <p className='text-muted'>{firstName}'s personality type is <strong style={{color:'blue'}}>{personalityType.type}</strong></p>
        <div className="row">
          <div className="col-sm-3">
            {/* import all personality cards and run conditional to render correct one */}
            <img src={personalityImagePlaceholder} alt="personality placeholder" style={{width:'68px', height: 'auto'}}></img>
          </div>
          <div className="col-sm-9 text-muted p-0">
            {personalityType.description}
          </div>
        </div>
      </div>

    </div >
  )
}

export default PersonalityType;