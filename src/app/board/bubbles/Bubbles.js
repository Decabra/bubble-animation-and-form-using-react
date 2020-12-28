import React, {Component} from 'react'
import Bubble from './bubble/Bubble'

let intervalArr = [];

class Bubbles extends Component{

    render()
    {
        const interval = setInterval( () => {
            new Bubble(document.querySelector("#bubbles"), 8)
        }, 1000);
        intervalArr.push(interval)

        return <div id="bubbles"></div>
    }

    componentWillUnmount(){
        for (const id of intervalArr) {
            clearInterval(id);
        }
        intervalArr = []
    }

}
export default Bubbles;
