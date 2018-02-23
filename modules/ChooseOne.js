// @flow

/**
 * ChooseOne.js
 *
 * Extends the base Question component to create a "select one of the following..." type
 * questions. Uses standard radio inputs with labels for accessibility. For now, children
 * should be <span> elements, each of which defines an option.
 * TODO: Make options use their own specialized components
 */
import * as React from "react";
import styled from "styled-components";
import Question, { Style } from "./Question";
import Choice from "./Choice";

// Containing div - use base Props from Question since they define `current` boolean
const ChooseOneWrapper = Style;

// Styling for each individual option (label + radio)
const Option = styled.label`
  display: inline-block;
  margin: 5px 10px;
`;

// Props specific to this type of Question
type ChooseOneProps = {
  groupName: string, // defines `name` property for radio inputs
  children: React.ChildrenArray<React.Element<typeof Choice>>,
};

class ChooseOne extends Question<ChooseOneProps> {
  render() {
    const { children, tabIndex, groupName, ...otherProps } = this.props;
    return (
      <ChooseOneWrapper
        {...otherProps}
        tabIndex={tabIndex || "0"} // Allow tab key to cycle through questions
      >
        {React.Children.map(children, child =>
          // Automatically assign some properties like input type and the name for form grouping
          React.cloneElement(child, { type: "radio", groupName }),
        )}
      </ChooseOneWrapper>
    );
  }
}

export default ChooseOne;
