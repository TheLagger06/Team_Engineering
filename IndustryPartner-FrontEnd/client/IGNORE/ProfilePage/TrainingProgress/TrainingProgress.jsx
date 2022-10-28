import Card from 'react-bootstrap/Card';

const TrainingProgress = ({ trainingProgess }) => {

    let id = 0;

    const tpElements = trainingProgess.map(tp => {
        return (
            <p key={id++}>
                <p>{tp.module}</p>
                <p>{tp.challenge}</p>
                <p>{tp.result}</p>
            </p>
        )
    })

    return (
        <div className='row'>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Training Progress
                    </Card.Title>
                    <Card.Text>
                        {tpElements}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TrainingProgress;