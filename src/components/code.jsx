'use strict';

import React, { PropTypes } from 'react';
import rg from '../lib/rg';

const styles = {
  code: {
    marginLeft: 10,
    marginTop: 10,
    padding: 5,
    whiteSpace: 'nowrap',
    border: '1px solid #EAEAEA',
    backgroundColor: '#F8F8F8',
    borderRadius: 3,
    display: 'inline',
    color: '#d14'
  }
};

const Code = React.createClass({

  propTypes: {
    output: PropTypes.string
  },

  statics: {
    getData: function(value) {
      const r = /`(.*?)`/;
      return rg(value, r, 1);
    }
  },

  render() {
    return (
      <code style={styles.code}> {this.props.output} </code>
    );
  }

});

export default Code;
