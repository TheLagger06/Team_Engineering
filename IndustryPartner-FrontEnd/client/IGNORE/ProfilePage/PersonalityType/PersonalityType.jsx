import Card from 'react-bootstrap/Card';

const PersonalityType = ({ personality }) => {

    return (
        <div className='personalityType'>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Personality Type
                    </Card.Title>
                    <Card.Text>
                        <p>Type: {personality.type}</p>
                        <p>{personality.description}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}

export default PersonalityType;