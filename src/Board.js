import React from 'react'

const Board = (props) => {
    return (
        <>
            <div className="grid-item" onClick={props.onClick}>{props.value}</div>

        </>
    )
}

export default Board