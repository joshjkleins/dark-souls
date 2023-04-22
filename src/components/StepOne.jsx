function StepOne({choice}) {

    return(
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal flex justify-center items-center h-screen pb-20">
            <button className="btn" onClick={() => choice('Dark Souls')}>Dark Souls</button>
            <button className="btn" onClick={() => choice('Dark Souls 2')}>Dark Souls 2</button>
            <button className="btn" onClick={() => choice('Dark Souls 3')}>Dark Souls 3</button>
        </div>
    )
}

export default StepOne