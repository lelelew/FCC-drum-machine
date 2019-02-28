import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class App extends Component {
  constructor(){
    super();
    document.body.addEventListener("keypress", event => {
      this.playNote(event.key.toUpperCase());
    });
  }

  playNote = note => {
    document.getElementById("display").innerHTML = note;
    let sound = document.getElementById(note);
    if(sound) {
      sound.pause();
      sound.currentTime = 0;
      sound.play();
    }
  }
  
  onButtonClick = event => {
    let buttonID = event.currentTarget.id;
    let noteIndex = buttonID.length - 1;
    let note = buttonID[noteIndex];
    this.playNote(note)
  };


  render() {
    return (
      <div id="drum-machine">
        <div id="display"> Press Any Key to Begin
        </div>
        <Container id="controls">
          <Button variant="outline-dark" size="large" className="drum-pad" id="button-Q" onClick={this.onButtonClick}>
            Q
            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">
            </audio>
          </Button>
          <Button variant="outline-dark" size="large" className="drum-pad" id="button-W" onClick={this.onButtonClick}>
            W
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">
            </audio>
          </Button>
          <Button variant="outline-dark" size="large" className="drum-pad" id="button-E" onClick={this.onButtonClick}>
            E
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">
            </audio>
          </Button>
          <Button variant="outline-dark" size="large" className="drum-pad" id="button-A" onClick={this.onButtonClick}>
            A
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">
            </audio>
          </Button>
          <Button variant="outline-dark" size="large" className="drum-pad" id="button-S" onClick={this.onButtonClick}>
            S
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">
            </audio>
          </Button>
          <Button variant="outline-dark" size="large" className="drum-pad" id="button-D" onClick={this.onButtonClick}>
            D
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">
            </audio>
          </Button>
          <Button variant="outline-dark" size="large" className="drum-pad" id="button-Z" onClick={this.onButtonClick}>
            Z
            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">
            </audio>
          </Button>
          <Button variant="outline-dark" size="large" className="drum-pad" id="button-X" onClick={this.onButtonClick}>
            X
            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">
            </audio>
          </Button>
          <Button variant="outline-dark" size="large" className="drum-pad" id="button-C" onClick={this.onButtonClick}>
            C
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">
            </audio>
          </Button>

        </Container>
      </div>
    );
  }
}

export default App;
