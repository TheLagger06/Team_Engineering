import React from 'react'
import achievementIcon from './img/achievement-icon.svg'
const AchievementsCard = ({ achievements }) => {

    let id = 0;

    const achievementElements = achievements.map(achievement => {

        return (
            <div style={{ display: 'block', paddingBottom: '10px' }} key={id++}>
                <img src={achievementIcon} alt="achievement icon"></img>
                <h6 className="mb-0" style={{ display: 'inline', paddingLeft: '5px' }}>{achievement.title}</h6>
            </div>
        )
    })

    return (
        <div className="card mb-4 p-0">
            <h5 className="card-header text-center" style={{ color: 'white', backgroundColor: '#3B8BC9' }}>Achievements</h5>
            <div className="card-body p-3">
                {achievementElements}
            </div>
        </div>
    )
}

export default AchievementsCard;