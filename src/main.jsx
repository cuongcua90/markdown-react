'use strict';

import React from 'react';
import Parser from './parser';

const styles = {
  liveDemo: {
    display: 'flex',
    margin: 'auto',
    width: 800
  },

  halfZone: {
    flex: 1,
    WebkitFlex: 1,
    padding: 20
  }
};

const Home = React.createClass({

  getInitialState() {
    return {
      value: [
        'Noi lua len em http://media.giphy.com/media/11Uej6mhxSPnIk/giphy.gif',
        '```javascript',
        'x=2',
        'y=3',
        '```',
        '`x+y=4`'
      ].join('\n')
    };
  },

  render() {
    return (
      <div style={styles.liveDemo}>
        <div style={styles.halfZone}>
          <textarea cols='40' rows='20' onChange={this.textInputDidChange}
          value={this.state.value} />
        </div>
        <div style={styles.halfZone}>
          <Parser value={this.state.value}/>
        </div>
      </div>
    );
  },

  textInputDidChange(e) {
    this.setState({ value: e.currentTarget.value });
  }

});


React.render(
  <Home />,
  document.getElementById('main')
);
