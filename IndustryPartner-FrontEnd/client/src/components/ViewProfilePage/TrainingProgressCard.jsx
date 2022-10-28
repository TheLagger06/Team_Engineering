import React from 'react'

const TrainingProgressCard = ({ training }) => {

    let id = 0;

    const tpElements = training.map(train => {

        return (
            <div key={id++} >
                <div className="row">
                    <div className="col-sm-4" style={{}}>
                        <p className="mb-0">{train.module}</p>
                    </div>
                    <div className="col-sm-5">
                        <p className="text-muted">{train.challenge}</p>
                    </div>
                    <div className="col-sm-3">
                        <p className="text" style={{border: '1px solid', borderRadius:'25px', width: '50px', textAlign:'center', backgroundColor:'#C8E6C9', color: 'green'}}>{train.result}</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    })


    //create a map function to loop through and print instead
    return (
        <div className="card mb-4">
            <h5 className='card-header text-center' style={{ color: 'white', backgroundColor:'#3B8BC9'}}> Training Progress</h5 >

           
            <div className="card-body" >
                <div className="row">
                    <div className="col-sm-4">
                        <h6 className="mb-0"><strong>Learning Module</strong></h6>
                    </div>
                    <div className="col-sm-5">
                        <h6 className="text"><strong>Challenge</strong></h6>
                    </div>
                    <div className="col-sm-3">
                        <h6 className="font-weight-bolder" style={{width: '50px', textAlign:'center'}}><strong>Result</strong></h6>
                    </div>
                </div>
                <hr></hr>
                {tpElements}

            </div>
        </div >
    )
}

export default TrainingProgressCard;