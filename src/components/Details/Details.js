import React, { Component } from 'react';
import { MessageConsumer } from 'context/context';
import { Link } from 'react-router-dom';

import './Details.scss';
class Details extends Component {
  state = {
    id: null
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.message_id;
    this.setState({
      id: id
    });
  }
  render() {
    const { id } = this.state;
    return (
      <MessageConsumer>
      {({messages}) => {
        
        const selectedMessage = messages.find(v => v.title === id);

        if (selectedMessage !== undefined) {
          return (
            <div className="container small-container">
              <h2>
                  {selectedMessage.title}
              </h2>

              <p>
                { selectedMessage.message }
              </p>

              <Link to='/' className="back-button">
                  Back
              </Link>
          </div>
          )
        }
      }}
    </MessageConsumer>
    );
  }
}

export default Details;
