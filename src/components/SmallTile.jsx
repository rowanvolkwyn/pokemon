const SmallTile = (props) => {
    return (
        <div id='small-tile'>
            <div className="image">
                <img src={props.src} />
            </div>
            <div className="info">
                <h2>{props.name}</h2>
                <p>{props.height}</p>
            </div>
        </div>
    )
}

export default SmallTile;