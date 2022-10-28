import React from 'react'
import qualificationIcon from './img/graduationHat.svg'

const QualificationsCard = ({ qualifications }) => {

    let id = 0;

    const qualificationElements = qualifications.map(qualification => {
        return (
            <div key={id++}>
                <img src={qualificationIcon} alt="graduation hat icon"></img>
                <h6 className="mb-0" style={{ display: 'inline', paddingLeft: '10px' }}>{qualification.level}</h6>
                <h6 className="mb-0" style={{ display: 'inline' }}> - {qualification.subject}</h6>
                <p className="mb-0" style={{ display: 'block', paddingLeft: '1.6em', paddingBottom: '10px', color: 'grey' }}>{qualification.establishment}</p>
            </div>
        )
    })

    return (
        <div className="card mb-4 p-0">
            <h5 className="card-header text-center" style={{ color: 'white', backgroundColor: '#3B8BC9' }}>Qualifications</h5>
            <div className="card-body p-3">
                {qualificationElements}
            </div>
        </div>
    )
}

export default QualificationsCard