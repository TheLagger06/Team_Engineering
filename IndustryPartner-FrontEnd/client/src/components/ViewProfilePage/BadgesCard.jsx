import React from 'react'
import badge from '../ViewProfilePage/img/badge.svg';
//import redReject from '../ViewProfilePage/img/redReject.svg';

const BadgesCard = ({ badges }) => {

    return (
        <div className="card mb-4">
            <h5 className="card-header text-center" style={{ color: 'white', backgroundColor: '#3B8BC9' }}>Badges</h5>
            <div className="card-body p-3">
                {badges.java8 ? 
                    <div style={{paddingBottom:'10px'}}>
                        <img src={badge} alt="badge icon"></img>
                        <p style={{display: 'inline', paddingLeft: '5px'}}>Oracle Java SE 8 Associate</p>
                    </div> : <></>}
                {badges.aws ? 
                    <div style={{paddingBottom:'10px'}}>
                        <img src={badge} alt="badge icon"></img>
                        <p style={{display: 'inline', paddingLeft: '5px'}}>AWS Cloud Practitioner</p>
                    </div> : <></>}
                {badges.python ? 
                    <div style={{paddingBottom:'10px'}}>
                        <img src={badge} alt="badge icon"></img>
                        <p style={{display: 'inline', paddingLeft: '5px'}}>Certified Associate in Python Programming</p>
                    </div> : <></>}
                {badges.agileExplorer ? 
                    <div style={{paddingBottom:'10px'}}>
                        <img src={badge} alt="badge icon"></img>
                        <p style={{display: 'inline', paddingLeft: '5px'}}>IBM Agile Explorer</p>
                    </div> : <></>}
            </div>
        </div>
    )
}

export default BadgesCard;