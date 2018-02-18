// @flow

/**
 * Question.js
 *
 * Represents a single question on the ticket. Most of the specific question type
 * components extend this base component. You can also extend from this component
 * yourself if you want to develop some awesome, custom questions. :)
 */

import * as React from "react";
import styled from "styled-components";

// Potential props for a Question
export type Props = {
  current: boolean, // currently selected questions get special styling
  onFocus: () => any,
  onBlur: () => any,
  tabIndex?: string, // tabIndex is overridable by user
  children: React.ChildrenArray<React.Element<any>>,
};

// Containing div for a Question - style based on current selection
const QuestionWrapper = styled.div`
  background: ${(props: Props) => (props.current ? "pink" : "transparent")};
  outline: 0;

  &:focus {
    outline: 0;
  }
`;

// Export the style for use in other types of Questions
export const Style = QuestionWrapper;

class Question<SpecificProps> extends React.Component<Props & SpecificProps> {
  static defaultProps = {
    current: false, // not selected by default
  };

  render() {
    const { children, tabIndex, ...otherProps } = this.props;
    return (
      <QuestionWrapper
        {...otherProps}
        tabIndex={tabIndex || "0"} // Allow tab key to cycle through questions
      >
        {children}
      </QuestionWrapper>
    );
  }
}

export default Question;
