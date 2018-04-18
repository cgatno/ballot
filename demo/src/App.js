import React, { Component } from "react";
import { ChooseAny, ChooseOne, Choice, Question, Ticket } from "ballot";

class App extends Component {
  render() {
    return (
      <Ticket>
        <h1>BlockchainNet Sign Up Form</h1>
        <p>
          Tired of quick n' easy HTTP? Blockchain-powered internet is here, and
          all you need to do is sign up and complete a few hours of config. The
          future is here!
        </p>
        <ChooseOne groupName="options">
          <Choice text="First Option" value="one" />
          <Choice text="Second Option" value="two" />
          <Choice text="Surprise Option!" value="surprise" />
        </ChooseOne>
        <ChooseAny groupName="freedom">
          <Choice text="First Option" value="one" />
          <Choice text="Second Option" value="two" />
          <Choice text="Surprise Option!" value="surprise" />
        </ChooseAny>
      </Ticket>
    );
  }
}

export default App;
