// @flow

/**
 * Ticket.js
 *
 * Container for the ballot/survey. Orchestrates validation, question dependency,
 * result storage and retrieval, and keyboard navigation.
 */

import * as React from "react";
import styled from "styled-components";
import Question from "./Question";
import ChooseOne from "./ChooseOne";

// Default styles for the outermost form container
// Use HTML <form> for the semantics and accessibility
const TicketWrapper = styled.form`
  background: #e8e8e8;
  max-width: 960px;
  display: block;
  margin: 0 auto;
  padding: 1em 2em;
`;

// All children should be Questions or Components that extend Question
type Props = {
  children: React.ChildrenArray<
    React.Element<typeof Question | typeof ChooseOne>,
  >,
};

type State = {
  currentQuestion: number, // track question that the user is currently working on
};

class Ticket extends React.Component<Props, State> {
  // Updates the currently selected question index, usually called by child components
  setCurrentQuestion(currentQuestion: number) {
    this.setState({
      currentQuestion,
    });
  }

  render() {
    // Pull children out of passed props
    const { children, ...otherProps } = this.props;

    return (
      <TicketWrapper {...otherProps}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            // Supply current boolean so Questions can use conditional styling
            current: this.state && this.state.currentQuestion === index,
            // Set current question based on DOM focus of children
            onFocus: () => this.setCurrentQuestion(index),
            onBlur: () => this.setCurrentQuestion(-1),
          }),
        )}
      </TicketWrapper>
    );
  }
}

export default Ticket;
