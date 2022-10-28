import { Link } from 'react-router-dom';
import profilePlaceholder from './img/profile-placeholder.jpeg'
import graduationIcon from './img/mortarboard-fill.svg';
import degreeIcon from './img/briefcase-fill.svg';
import badgeIcon from './img/badge-icon.svg'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function ProfileCard({ graduate, graduates }) {

    // const badgesElements = graduate.badges.map(badge => {
    //     return (
    //         badge.java8 ?
    //             <div className='Badges-Java'>
    //                 <Card.Img src={badgeIcon} style={{ width: '9%', height: 'auto' }} />
    //                 <h5 style={{ display: 'inline', paddingLeft: '8px', fontSize: '1rem' }} >Oracle Java SE 8 Associate</h5>
    //                 <p style={{ paddingLeft: '2.05em', color: 'grey', fontSize: '1rem' }}>{graduate.badges.java8}</p>
    //             </div> : <></>
    //     )
    // })

    return (
        <Card style={{ minHeight: '25rem', width: '18rem', marginRight: 'auto' }}>
            <Card.Body style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                <div className="img+title" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Card.Img variant="top" src={profilePlaceholder} style={{ width: '80px', padding: '0px 10px 10px 0px', borderRadius: '200px' }} />
                    <Card.Title>
                        {graduate.firstName} {graduate.lastName}
                        <br />
                        <p className="m-0" style={{ color: 'grey', fontSize: '15px' }}>{graduate.pronouns}</p>
                        <p className="m-0" style={{ color: 'grey', fontSize: '15px', paddingTop: '3px' }}>{graduate.dfSubject}</p>
                    </Card.Title>
                </div>
                <div>
                    <div className="graduation">
                        <Card.Img src={graduationIcon} style={{ width: '9%', height: 'auto' }} />
                        <h5 style={{ display: 'inline', paddingLeft: '10px', fontSize: '1rem' }}>Digital Futures graduation</h5>
                        <p style={{ paddingLeft: '2em', color: 'grey', fontSize: '1rem' }}>{graduate.dfGraduationDate}</p>
                    </div>
                    <div className='Education'>
                        <Card.Img src={degreeIcon} style={{ width: '8%', height: 'auto' }} />
                        <h5 style={{ display: 'inline', paddingLeft: '12px', fontSize: '1rem' }} >{graduate.universityDegree}</h5>
                        <p style={{ paddingLeft: '2.03em', color: 'grey', fontSize: '1rem' }}>{graduate.university}</p>
                    </div>
                    {graduate.badges.java8 ?
                        <div className='Badges-Java'>
                            <Card.Img src={badgeIcon} style={{ width: '9%', height: 'auto' }} />
                            <h5 style={{ display: 'inline', paddingLeft: '8px', fontSize: '1rem' }} >Oracle Java SE 8 Associate</h5>
                            <p style={{ paddingLeft: '2.05em', color: 'grey', fontSize: '1rem' }}>{graduate.badges.java8}</p>
                        </div> : <></>}
                    {graduate.badges.python ?
                        <div className='Badges-Python'>
                            <Card.Img src={badgeIcon} style={{ width: '9%', height: 'auto' }} />
                            <h5 style={{ display: 'inline', paddingLeft: '8px', fontSize: '1rem' }} >Python Associate</h5>
                            <p style={{ paddingLeft: '2.05em', color: 'grey', fontSize: '1rem' }}>{graduate.badges.python}</p>
                        </div> : <></>}
                    {graduate.badges.aws ?
                        <div className='Badges-Aws'>
                            <Card.Img src={badgeIcon} style={{ width: '9%', height: 'auto' }} />
                            <h5 style={{ display: 'inline', paddingLeft: '8px', fontSize: '1rem' }} >AWS Solutions Associate</h5>
                            <p style={{ paddingLeft: '2.05em', color: 'grey', fontSize: '1rem' }}>{graduate.badges.aws}</p>
                        </div> : <></>}
                </div>
            </Card.Body>

            <Card.Footer style={{ padding: '10px 0px 10px 0px', backgroundColor: 'white' }}>
                <Link to="/profile" state={{ _id: graduate._id, graduates: graduates }} >
                    <button type='button' className='btn p-2' style={{ color: '#3B8BC9', alignItems: 'centergit', width: '100%' }}><strong>View profile</strong></button>
                </Link>

            </Card.Footer>
        </Card >
    )
}

export default ProfileCard;