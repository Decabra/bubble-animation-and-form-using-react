import React, {Component} from 'react';
let bgPos = null;
class Bar extends Component{
    render(){
        return <div id="bar">Task 2</div>
    }
    componentDidMount() {
        this.bar = document.querySelector("#bar");
        this.bar.style.width = "100%"
        this.bar.style.backgroundColor = "white"
        bgPos = this.bar.style.backgroundPosition = "right"
        this.bar.style.textAlign = "center"
        this.bar.style.fontSize = "2rem"
        this.bar.style.padding = "1rem"
        this.bar.style.fontWeight = "700"
        this.linearStyle();
    }

    linearStyle(){
        if(bgPos === "right"){
            setTimeout(() => {
                // console.log("yellow")
                this.bar.style.background= "linear-gradient(to right, yellow 50%, white 50%)"
                bgPos = this.bar.style.backgroundPosition = "left"
                this.bar.style.backgroundSize= "200%"
                this.bar.style.transition= "All 1s ease-in-out"
            }, 1000)
        }
        else{
            setTimeout(() => {
                // console.log("white")
                bgPos = this.bar.style.backgroundPosition = "right"
            }, 3000)
        }
        setTimeout(
            this.linearStyle.bind(this), 10000 )
    }
}
export default Bar;
