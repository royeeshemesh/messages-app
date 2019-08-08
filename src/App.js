import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      list: []
    };
  }

  handleMessageChange = e => {
    this.setState({
      message: e.target.value
    });
  };


  handleMessageSubmit = e => {
    e.preventDefault();
    const {message, list} = this.state;

    this.setState({
      list: [message, ...list],
      message: ''
    });
  };

  render() {
    const messages = this.state.list.map((message, key) => {
      return (
        <div key={key}>
          <span>{message}</span>
          <hr/>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Messages app</h2>
            <form onSubmit={this.handleMessageSubmit}>
              <div className="form-group">
                <input className="form-control" placeholder="type your message here" value={this.state.message}
                       onChange={this.handleMessageChange}/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Send</button>
              </div>
            </form>
            <hr/>
            {messages}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
