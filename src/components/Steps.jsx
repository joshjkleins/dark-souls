function Steps({step}) {
    return(
        <div className="flex justify-center align-items-center py-10">
            <ul className="steps">
                <li className="step step-primary px-5">Choose Game</li>
                <li className={step === '' ? 'step' : 'step step-primary'}>Choose Build</li>
            </ul>
        </div>
    )
}

export default Steps