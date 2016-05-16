import React from 'react';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import _ from 'lodash';
import request from 'superagent';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      addresses: []
    };
  }

  fetchAddresses() {
    return new Promise((resolve, reject) => {
      request.get('https://www.meethue.com/api/nupnp')
             .set('Accept', 'application/json')
             .end((err, res) => {
               res.ok ? resolve(res) : reject(res);
             })
    })
  }

  componentDidMount() {
    this.fetchAddresses()
        .then((res) => {
          console.log(res);
          this.setState({addresses: res.body});
        })
        .catch((res) => {
          console.error(res);
        });
  }

  render() {
    const addressList = () => {
      return this.state.addresses.map((address) => {
        return (<div key={address.id}>{address.internalipaddress}</div>)
      });
    }
    
    return (
      <div>{addressList()}</div>
    );
  }
  
}

export default App;
