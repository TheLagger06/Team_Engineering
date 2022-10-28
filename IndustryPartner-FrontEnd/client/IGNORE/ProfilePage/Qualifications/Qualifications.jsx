import Card from 'react-bootstrap/Card';

const Qualifications = ({ qualifications }) => {


    let id = 0;

    const qualElements = qualifications.map(qualification => {
        return (
            <p key={id++}>
                <p>{qualification.level}</p>
                <p>{qualification.subject}</p>
                <p>{qualification.establishment}</p>
            </p>
        )
    })

    return (
        <div className='row'>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Qualifications
                    </Card.Title>
                    <Card.Text>
                        {qualElements}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Qualifications