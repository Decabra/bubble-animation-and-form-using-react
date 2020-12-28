let {innerHeight, innerWidth} = window;
let bubbleOnScreen = 0;
class Bubble {
    constructor(root, totalBubbles) {
        this.root = root;
        this.bubbleSpan = undefined;
        if(bubbleOnScreen <= totalBubbles){
            this.handleNewBubble();
            this.color = this.randomColor();
            this.width = this.height = this.randomNumber(20, 60);
        }
    }
    // creates and appends a new bubble in the DOM
    handleNewBubble() {
        this.bubbleSpan = document.createElement("span");
        this.bubbleSpan.style.position = "absolute";
        this.bubbleSpan.style.borderRadius = "50%";
        this.bubbleSpan.style.transition = "linear 2s, transform 0.2s";
        this.bubbleSpan.style.boxShadow = "5px 5px 5px";
        this.root.append(this.bubbleSpan);
        this.handlePosition();
        bubbleOnScreen++;
    }

    handlePosition() {
        // positioning the bubble in different random X and Y
        this.height += (this.posY/40) % 150;
        this.bubbleSpan.style.backgroundColor = this.color;
        this.bubbleSpan.style.height = this.height + "px";
        this.bubbleSpan.style.width = this.height + "px";
        this.posY = this.randomNumber(100, innerHeight - 120);
        this.posX = this.randomNumber(20, innerWidth - 120);
        this.bubbleSpan.style.top = this.posY + "px";
        this.bubbleSpan.style.left = this.posX + "px";
        // check if bubble width and height is greater than or equal to 100
        if (this.height >= 100) {
            this.bubbleEnd(500);
        } else {
            // calling for re-position of bubble
            setTimeout(this.handlePosition.bind(this), this.randomNumber(3000, 4000));
        }
    }

    randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randomColor() {
        return `rgba(
        ${this.randomNumber(0, 255)},
        ${this.randomNumber(0, 255)},
        ${this.randomNumber(0, 255)}, 
        ${this.randomNumber(0.1, 1)})`;
    }

    bubbleEnd(removingTime = 0) {
            setTimeout(
                () => {
                    this.bubbleSpan.style.transform = "scale(1.8)";
                },
                removingTime === 0 ? removingTime : removingTime - 200
            );

            setTimeout(() => {
                this.bubbleSpan.remove();
                bubbleOnScreen--;
            }, removingTime);

    }
}
export default Bubble
