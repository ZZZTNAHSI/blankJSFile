

export default function Log( {turns} ) {



    return( <ol id="log">
        {turns.map((turn) => {
            return (<li> Made the move {turn.player} on row {turn.square.row + 1} column {turn.square.col + 1} </li>);
        })}
    </ol>);
}