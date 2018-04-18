import * as React from "react";

type Props = {
  text: string,
  value: string,
  type: string, // radio or checkbox
  groupName: string,
  defaultSelected?: boolean,
};

class Choice extends React.Component<Props> {
  static defaultProps = {
    defaultSelected: false, // Only one choice can be selected by default - must be manually specified
  };

  render() {
    return (
      <label htmlFor={`${this.props.groupName}-${this.props.value}`}>
        <input
          type={this.props.type}
          name={this.props.groupName}
          // TODO: More validation to check HTML ID
          id={`${this.props.groupName}-${this.props.value}`}
          value={this.props.value}
          tabIndex="-1"
        />
        {this.props.text}
      </label>
    );
  }
}

export default Choice;
