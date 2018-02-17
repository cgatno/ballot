// @flow

import * as React from "react";
import styled from "styled-components";

const TicketWrapper = styled.form`
  background: #e8e8e8;
`;

type Props = {
  children?: Array<{}>
};

class Ticket extends React.Component<Props> {
  welcome: string;

  constructor(props: Props) {
    super(props);

    this.welcome = "More coming soon! 🙂";
  }

  render() {
    return <TicketWrapper>{this.props.children}</TicketWrapper>;
  }
}

export default Ticket;
