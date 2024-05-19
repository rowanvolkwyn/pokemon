const LargeTile = (props) => {
    return (
        <div id='largeTile'>
            <img src={props.src} />
            <h2>{props.name}</h2>
        </div>
    )
}

export default LargeTile;