import React from 'react'
import greenTick from '../ViewProfilePage/img/green-tick.svg';
import redReject from '../ViewProfilePage/img/redReject.svg';

const BadgesCard = ({ diligence }) => {
    return (
        <div className="card mb-4">
            <h5 className="card-header text-center" style={{ color: 'white', backgroundColor:'#3B8BC9' }}>Due Diligence Checks</h5>
            <div className="card-body p-3">
                <div className='row p-1'>
                    <p className='mb-0'>{diligence.disclosure ? <img src={greenTick} style={{width:'8%'}}></img> : <img src={redReject}></img>} Disclosure</p>
                </div>
                <div className='row p-1'>
                    <p className="mb-0">{diligence.rightToWork ? <img src={greenTick} style={{width:'8%'}}></img> : <img src={redReject}></img>} Right to work</p>
                </div>
                <div className='row p-1'>
                    <p className="mb-0">{diligence.identity ? <img src={greenTick} style={{width:'8%'}}></img> : <img src={redReject}></img>} Identity</p>
                </div>
                <div className='row p-1'>
                    <p className="mb-0">{diligence.education ? <img src={greenTick} style={{width:'8%'}}></img> : <img src={redReject}></img>} Education</p>
                </div>
                <div className='row p-1'>
                    <p className="mb-0">{diligence.credit ? <img src={greenTick} style={{width:'8%'}}></img> : <img src={redReject}></img>} Credit</p>
                </div>
            </div>
        </div >
    )
}

export default BadgesCard;