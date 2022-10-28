import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
// import testData from '../../../utils/testData/testData.js'
// const graduate = testData.graduate;

function Diligence({ diligence }) {



    return (

        <div className='row'>

            <Card >

                <Card.Body style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                    <div className="dDC" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Card.Title>Due Diligence Checks</Card.Title>
                    </div>
                    <Card.Text>
                        {diligence.disclosure && <p> Disclosure check passed </p>}
                        {diligence.rightToWork && <p> Right to work check passed</p>}
                        {diligence.identity && <p> Identity check passed</p>}
                        {diligence.education && <p>Education check passed</p>}
                        {diligence.credit && <p> Credit check passed </p>}
                    </Card.Text>

                </Card.Body>
            </Card>






        </div>

    )
}



export default Diligence;