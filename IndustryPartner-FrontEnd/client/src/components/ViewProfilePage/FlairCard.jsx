import React from 'react'
import flairIcon from './img/book-half.svg'
const FlairCard = ({ flairs }) => {

    let id = 0;

    const flairElements = flairs.map(flair => {


        return (
            <div key={id++}>
                <img src={flairIcon}></img>
                <h6 className="mb-0" style={{ display: 'inline', paddingLeft: '5px' }}>{flair.type}</h6>
                <p className="mb-0" style={{ display: 'block', paddingLeft: '1.3em', paddingBottom: '10px', color: 'grey' }}>{flair.description}</p>
            </div>
        )
    })

    return (
        <div className="card mb-4 p-0">
            <h5 className="card-header text-center" style={{ color: 'white', backgroundColor: '#3B8BC9' }}>Flair</h5>
            <div className="card-body p-3">
                {flairElements}
            </div>
        </div>
    )
}

export default FlairCard;