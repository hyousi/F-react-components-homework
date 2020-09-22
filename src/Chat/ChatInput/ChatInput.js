import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSendMessage = () => {
    const { sendMessage } = this.props;

    sendMessage(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <button type="button" onClick={this.handleSendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
