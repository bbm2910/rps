"use strict";
//global variables
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

//game class -------------------------------------------------------------------------------
class RockPaperScissors {
  constructor() {
    this.choices = ["rock", "paper", "scissors"];
    this.playerSelection = "";
    this.computerSelection = "";
    rock.addEventListener("click", () => this.setPlayerSelection("rock"));
    paper.addEventListener("click", () => this.setPlayerSelection("paper"));
    scissors.addEventListener("click", () =>
      this.setPlayerSelection("scissors")
    );
  }

  //get the computer choice from the array----------------------------------------------------------
  getComputerChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  //get the players choice -------------------------------------------------------------------------------
  setPlayerSelection(choice) {
    this.playerSelection = choice;
    console.log(`Player chose: ${choice}`);
    this.playRound();
  }

  //game logic -------------------------------------------------------------------------------
  playRound() {
    this.computerSelection = this.getComputerChoice();
    console.log(`Computer chose: ${this.computerSelection}`);

    let resultMessage = "";
    if (this.playerSelection === this.computerSelection) {
      resultMessage = `Tie! You both chose: ${this.playerSelection}`;
    } else if (
      (this.playerSelection === "rock" &&
        this.computerSelection === "scissors") ||
      (this.playerSelection === "paper" && this.computerSelection === "rock") ||
      (this.playerSelection === "scissors" &&
        this.computerSelection === "paper")
    ) {
      resultMessage = "You won! Good job!";
    } else {
      resultMessage = "Computer won!";
    }

    document.querySelector(".result").textContent = resultMessage;
  }
}

//run the game -------------------------------------------------------------------------------
const newGame = new RockPaperScissors();
