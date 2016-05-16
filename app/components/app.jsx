import React from 'react';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import _ from 'lodash'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("clicked!");
  }

  render() {
    const buttons = () => {
      const icons = ['apple', 'yen', 'ruble', 'grain', 'heart'];
      return ["default", "primary", "success", "info", "warning", "danger"].map((style) => {
        return (
          <Button key={style} bsStyle={style} onClick={this.handleClick}>
            <Glyphicon glyph={icons[_.random(0, 4)]} />
            {` ${_.capitalize(style)}`}
          </Button>
        );
      });
    };

    return (
      <div>
        <ButtonToolbar>
          {buttons()}
        </ButtonToolbar>
      </div>
    );
  }
  
}

export default App;
