'use strict';

import React, { PropTypes } from 'react';
import rg from '../lib/rg';

const styles = {
  codeBlock: {
    whiteSpace: 'pre',
    borderRadius: 3,
    border: '1px solid #CCC',
    padding: '0.5em 0.7em',
    background: '#fff',
    color: 'black',
    margin: 10
  }
};

const CodeBlock = React.createClass({

  propTypes: {
    output: PropTypes.string
  },

  statics: {
    getData: function(value) {
      const r = /`{3}(?:(.*$)\n)?([\s\S]*)`{3}/;
      return rg(value, r, 2);
    }
  },

  render() {
    return (
      <div className='codeblock' style={styles.codeBlock}>
        {this.props.output}
      </div>
    );
  }
})

export default CodeBlock;
