function Bosses({active}) {
    return(
        <div className="flex max-w-8xl mx-auto">
            <div className="bg-base-100 mx-5 w-full mb-10">
                <figure className="mt-7 ml-7 justify-start">
                    <img src={active.imageUrl} alt={active.name} className="max-w-sm max-h-60" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{active.name}</h2>
                    <div>Location: {active.location}</div>
                    <div>Health: {active.health}</div>
                    <div>Souls: {active.exp}</div>
                    <div className="divider"></div> 
                    <div className="flex flex-wrap">
                        <div className="w-full py-1 mb-3">
                            <div className="stat-title">{active.weaknesses.length > 1 ? 'Weaknesses' : 'Weakness'}</div>
                            <div className="stat-value whitespace-break-spaces">{active.weaknesses.map(weak => <div className="badge-md badge mr-2">{weak}</div>)}</div>
                        </div>
                        
                        <div className="w-full py-1 mb-3">
                            <div className="stat-title">{active.resistances.length > 1 ? 'Resistances' : 'Resistance'}</div>
                            <div className="stat-value">{active.resistances.map(resist => <div className="badge-md badge mr-2">{resist}</div>)}</div>
                        </div>
                        
                        <div className="w-full py-1 mb-3">
                            <div className="stat-title">Immunities</div>
                            <div className="stat-value">{active.immune.map(im => <div className="badge-md badge mr-2">{im}</div>)}</div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Bosses