function Quests({ active }) {
    return(
        <div className="max-w-100">
            <div className=" bg-base-100  mx-5">
                <figure className="px-10 pt-10 max-w-md">
                    <img src={active.imageUrl} alt={active.name} className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{active.name}</h2>
                    <ol>
                        {active.steps.map((quest, i) => {
                            return <li className="mb-4 list-decimal" key={i}>{quest}</li>
                        })}
                    </ol>
                </div>
            </div>   
        </div>
    )
}



export default Quests