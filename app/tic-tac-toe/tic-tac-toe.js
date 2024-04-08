import {Helper as helper} from "./helper/helper.js";

export default class TicTacToe extends crs.classes.BindableElement {
    #actionHandler;
    get shadowDom() {
        return true;
    }
    get html() {
        return import.meta.url.replace(".js",".html");
    }

    async connectedCallback() {
        await super.connectedCallback();
        await this.#renderBoard();

        this.#actionHandler = this.#actionsController.bind(this);
        this.board.addEventListener("click", this.#actionHandler);
    }

    async disconnectedCallback() {
        this.board.removeEventListener("click", this.#actionHandler);
        this.#actionHandler = null;
        await super.disconnectedCallback();
    }

    async preLoad() {
        this.setProperty("playerOneScore", 0);
        this.setProperty("playerTwoScore", 0);
        this.setProperty("selectedSquare", "");
    }


    /**
     * @method #startGame - This function will be used to start the game
     * @return {Promise<void>}
     */
    async #startGame() {
        //this function should trigger the start of the game where the computer makes the first move
        //this will activate on click(binding) of the start button
    }

    /**
     * @method #renderBoard - This function will be used to render the board
     * @return {Promise<void>}
     */
    async #renderBoard() {
        //this function should render the board on the screen a grid of 9 squares
        const element = this.shadowRoot.querySelector("#board");
        await crs.call("cssgrid", "init", {
            element
        })

        //generate grid columns
        await crs.call("cssgrid", "set_columns", {
            element,
            columns: "repeat(3, 1fr)"
        });

        //generate grid rows
        await crs.call("cssgrid", "set_rows", {
            element,
            rows: "repeat(3, 1fr)"
        });
    }

    /**
     * @method #actionsController - This function will be used to call the appropriate function
     * @param event
     * @return {Promise<void>}
     */
    async #actionsController(event) {
        //this is the function that will make use of convention over code to call the
        //appropriate function based on the event that is passed in
        const element = event.composedPath()[0];
        const parent = element.parentElement;
        if (element.ariaSelected === "true") {
            alert("This square has already been selected");
            return;
        }

        await this.#makeMove(parent,element);

    }

    /**
     * @method #makeMove - This function will be used to make a move
     * @return {Promise<void>}
     */
    async #makeMove(parent, element) {
        // this function will determine which square the computer will choose to make a move and whether the
        // player has made there move
        const isSelected = element.ariaSelected;
        const playerMove = parent.dataset.playerMove;

        let selectedSquare;
        if (isSelected === "false") {
            element.dataset.player = playerMove;
            element.ariaSelected = true;
            parent.dataset.playerMove = playerMove === "player-1" ? "player-2": "player-1";
        }

        element.textContent = playerMove === "player-1" ? "X": "O";
        await this.assertResults();
    }

    /**
     * @method #coreCounter - This function will be used to check if there is a winner
     * @return {Promise<void>}
     */
    async #scoreCounter() {
        //this function will keep track of the score of the game
        // and set the score count on the different binded data-attributes on the html
        // is any of the players have a score that 3 they win the game
    }

    async assertResults() {
        const elements =  this.shadowRoot.querySelectorAll(".square");
        const winningCombinations = {
            "0": [0,1,2], "1": [3,4,5], "2": [6,7,8], "3": [0,3,6],
            "4": [1,4,7], "5": [2,5,8], "6": [0,4,8], "7": [2,4,6]
        }
        const [playerOne = [], playerTwo=[]] = [];
        for (const element of elements) {
            if (element.ariaSelected === "false") continue;
            const position = parseInt(element.dataset.position);
            element.dataset.player === "player-1" ? playerOne.push(position): playerTwo.push(position);
        }

        if (playerOne.length < 3 && playerTwo.length < 3) return;

        //check if the combinations match the winning combinations
        for (const key in winningCombinations) {
            const combination = winningCombinations[key];
            const result = await helper.assertArrays(playerOne,playerTwo, combination);

            if(result === true) {
                const winner = playerOne.length === 3 ? "player-1": "player-2";
                console.log(`Winner ${winner}!`);
                break;
            } else {
                console.log("No winner yet");
                break;
            }
        }
    }

    async #inflateBoard() {

    }
}