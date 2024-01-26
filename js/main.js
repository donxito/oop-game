console.log("poi")


class Player {
    constructor(){
        this.positionX = 50;    // horizontal position
        this.positionY = 0;    // vertical position
        this.width = 20;
        this.height = 20;
        this.domElement = null;

        this.createDomElement()

    }

    createDomElement() {
        // create DOM element
        // step1: create the element
        this.domElement = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.setAttribute("id", "player");
        this.domElement.style.width = this.width + "vw";     // horizontal size
        this.domElement.style.height = this.height + "vh";   // vertical size
        this.domElement.style.left = this.positionX + "vw";   // move left, right
        this.domElement.style.bottom = this.positionY + "vh";  // move up, down
        

        
        //step3: append to the dom: `parentElm.appendChild()`
        const boardElement = document.getElementById("board");
        boardElement.appendChild(this.domElement);
    }


    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw"; 

        console.log(`moving left ...${this.positionX}`)

    }


    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw"; 

        console.log(`moving right ...${this.positionX}`)
        
    }
}


class Obstacle {
    constructor(){
        this.positionX = 50;    // horizontal position
        this.positionY = 100;    // vertical position
        this.width = 20;
        this.height = 20;


        this.createDomElement();

    }

    createDomElement() {
        // create DOM element
        // step1: create the element
        this.domElement = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.setAttribute("class", "obstacle");
        this.domElement.style.width = this.width + "vw";     // horizontal size
        this.domElement.style.height = this.height + "vh";   // vertical size
        this.domElement.style.left = this.positionX + "vw";   // move left, right
        this.domElement.style.bottom = this.positionY + "vh";  // move up, down
        

        
        //step3: append to the dom: `parentElm.appendChild()`
        const boardElement = document.getElementById("board");
        boardElement.appendChild(this.domElement);
    }

    moveDown() {
        this.positionY = this.positionY -10,
        this.domElement.style.bottom = this.positionY + "vh";
        console.log("moving down....")
      
    }

}



const playerTest = new Player();


const obstacle1 = new Obstacle();

setInterval(() => {
    obstacle1.moveDown();
}, 500);



document.addEventListener("click", (event) => {
    console.log("that was a click event")
})


document.addEventListener("keydown", (element) => {
    if (element.code === 'ArrowLeft') {

        playerTest.moveLeft();

        console.log('user pressed arrow LEFT....');

        
    } else if (element.code === 'ArrowRight') {

        playerTest.moveRight();

        console.log('user pressed arrow RIGHT....');
    }
});

