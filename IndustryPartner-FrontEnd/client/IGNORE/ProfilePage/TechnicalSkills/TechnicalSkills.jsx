import Card from 'react-bootstrap/Card';


const TechnicalSkills = ({ technicalSkills }) => {


    let id = 0;

    const skillElements = technicalSkills.map(ts => {
        return (
            <p key={id++}>
                <p>
                    {ts.skill}
                </p>
            </p>
        )
    })

    return (
        <div className='row'>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Technical Skills
                    </Card.Title>
                    <Card.Text>
                        {skillElements}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}

export default TechnicalSkills;