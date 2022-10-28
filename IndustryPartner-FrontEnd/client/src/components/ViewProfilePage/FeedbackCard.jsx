import React from 'react'
import openQuoteIcon from './img/open-quote.svg';
import closeQuoteIcon from './img/close-quote.svg';

const FeedbackCard = ({ feedback }) => {

    let id = 0;

    const feedbackElements = feedback.map(feedback => {
        return (
            <li className="list-group-item justify-content-between align-items-center p-3" key={id++}>
                <img src={openQuoteIcon} alt="open quote icon" style={{ paddingBottom: '15px', color: 'grey' }}></img>
                <i><p className="mb-0" style={{ display: 'inline', textOverflow: 'ellipsis', color: 'grey' }}> {feedback.description}</p></i>
                <img src={closeQuoteIcon} alt="close quote icon" style={{ paddingBottom: '15px' }}></img>
                <p className='mb-0' style={{ color: 'grey' }}>--{feedback.person}</p>
            </li>
        )
    })

    //backgroudColor:'#9BC7EB'
    return (
        <div className='col-lg-12' >
            <div className="card mb-4">
                <h5 className="card-header text-center" style={{ color: 'white', backgroundColor: '#3B8BC9' }}>Feedback</h5>
                <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                        {feedbackElements}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default FeedbackCard;