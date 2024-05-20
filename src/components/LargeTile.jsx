const LargeTile = (props) => {
    return (
        <div id='largeTile'>
            <img src={props.src} />
            <h2>{props.name}</h2>
            <p>{props.id}</p>
        </div>
    )
}

export default LargeTile;