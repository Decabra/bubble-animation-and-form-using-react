import React from 'react'
import Bubbles from './bubbles/Bubbles';
import Bar from './bar/Bar';

function Board(){
    return (
        <div id="board">
            <Bar/>
            <Bubbles/>
        </div>
    )
}

export default Board;
