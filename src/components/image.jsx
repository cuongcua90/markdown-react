'use strict';

import React, { PropTypes } from 'react';
import rg from '../lib/rg';

const Image = React.createClass({

  propTypes: {
    output: PropTypes.string
  },

  statics: {
    getData: function(value) {
      const r = /(https?:\/\/.*\.(?:png|jpg|gif))/
      return rg(value, r, 1);
    }
  },


  render() {
    const { output } = this.props;

    return (
      <div>
        <a href={output}>
          {output}
        </a>
        <img src={output} />
      </div>
    );
  }

});

export default Image;
