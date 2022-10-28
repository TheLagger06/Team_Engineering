import ProfileImg from '../../img/ProfileImg.png'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
// import testData from '../../../utils/testData/testData.js'
// const graduate = testData.graduate;

function Headline({ headlineInfo }) {
    return (

        <div className='headlineInfo'>
            <Card /* style={{ width: '30rem', marginRight: 'auto' }} */>
                <Card.Img variant="top" src={ProfileImg} style={{ width: '100px', padding: '10px', borderRadius: '200px' }} />
                <Card.Body style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                    <div className="img+title" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Card.Title>{headlineInfo.name}<br />  <p style={{ color: 'grey', fontSize: '15px' }}>{headlineInfo.pronouns}</p> </Card.Title>
                    </div>
                    <Card.Text>
                        <div className="graduation">
                            {/* <Card.Img src={graduationIcon} style={{ width: '10%', height: 'auto' }} /> */}
                            <h5 style={{ display: 'inline', paddingLeft: '10px', fontSize: '1rem' }}>Digital Futures graduation</h5>
                            <p style={{ paddingLeft: '2.2em', color: 'grey', fontSize: '1rem' }}>{headlineInfo.dfGraduationDate}</p>
                        </div>
                        <div className='Education'>
                            {/* <Card.Img src={degreeIcon} style={{ width: '8%', height: 'auto' }} /> */}
                            {/* <h5 style={{ display: 'inline', paddingLeft: '12px', fontSize: '1rem' }} >{headline.universityDegree}</h5>
                            <p style={{ paddingLeft: '2.05em', color: 'grey', fontSize: '1rem' }}>{headlineInfo.university}</p> */}
                        </div>

                    </Card.Text>
                    {/* <Button className='viewProfileButton' variant="primary" style={{ alignItems: 'centergit' }}>View profile</Button> */}
                </Card.Body>
            </Card >






        </div>

    )

}

export default Headline;