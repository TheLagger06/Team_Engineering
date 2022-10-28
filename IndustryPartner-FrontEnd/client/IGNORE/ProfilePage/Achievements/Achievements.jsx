import Card from 'react-bootstrap/Card';


const Achievements = ({ achievements }) => {

    let id = 0;

    const achieveElements = achievements.map(achievement => {
        return (
            <p key={id++}>
                <p>{achievement.title}</p>
            </p>
        )
    })


    return (
        <div className='row'>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Achievements
                    </Card.Title>
                    <Card.Text>
                        {achieveElements}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Achievements;