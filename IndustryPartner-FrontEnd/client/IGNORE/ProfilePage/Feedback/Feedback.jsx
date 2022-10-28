import Card from 'react-bootstrap/Card';

const Feedback = ({ feedback }) => {

    let id = 0;

    const feedbackElement = feedback.map(fb => {
        return (
            <p key={id++}>
                <p> {fb.description}</p>
                <p>{fb.person}</p>
            </p>
        )
    })

    return (
        <div className='row'>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Feedback
                    </Card.Title>
                    <Card.Text>
                        {feedbackElement}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Feedback;