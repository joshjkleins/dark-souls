function BossStats({ title, stat}) {
    return(
        <div className="stat">
            <div className="stat-title">{title}</div>
            <div className="stat-value">{stat}</div>
        </div>
    )
}

export default BossStats