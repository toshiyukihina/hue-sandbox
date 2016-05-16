import React from 'react';
import { Grid, Row, Table, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import _ from 'lodash';
import request from 'superagent';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      addresses: []
    };

    this.handleClickBridge = this.handleClickBridge.bind(this);
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

  handleClickBridge(e) {
    console.log(e);
  }

  componentDidMount() {
    this.fetchAddresses()
        .then((res) => {
          this.setState({addresses: res.body});
        })
        .catch((res) => {
          console.error(res);
        });
  }

  render() {
    const renderAddresses = () => {
      return this.state.addresses.map((address) => {
        return (
          <tr key={address.id} onClick={this.handleClickBridge}>
            <td>{address.id}</td>
            <td>{address.internalipaddress}</td>
          </tr>              
        )
      });
    }
    
    return (
      <div>
        <Grid>
          <Row>
            <h4>Found Hue Bridges</h4>
            <Table responsive condensed hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>IP Address</th>
                </tr>
              </thead>
              <tbody>
                {renderAddresses()}
              </tbody>            
            </Table>
          </Row>
        </Grid>
      </div>
    );
  }
  
}

export default App;
