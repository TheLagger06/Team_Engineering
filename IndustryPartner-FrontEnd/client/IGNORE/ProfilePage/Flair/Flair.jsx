import Card from 'react-bootstrap/Card';

const Flair = ({ flair }) => {

    let id = 0;

    const flairElements = flair.map(flair => {
        return (
            <p key={id++}>
                <p>{flair.type}</p>
                <p>{flair.description}</p>
            </p>
        )
    })

    return (
        <div className='row'>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Flair
                    </Card.Title>
                    <Card.Text>
                        {flairElements}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Flair;