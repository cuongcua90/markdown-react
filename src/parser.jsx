'use strict';

import React from 'react';
import Components from './components';

const Parser = React.createClass({

  render() {
    const { value } = this.props;
    let Lexer, parsed, data, startIndex = value.length;

    Object.keys(Components).forEach(key => {
      parsed = Components[key].getData(value);

      if (parsed && (parsed.first < startIndex)) {
        startIndex = parsed.first;
        Lexer = Components[key];
        data = parsed;
      }
    });

    let lastNoLexerIndex = (data && data.first >= 0) ?
      data.first : value.length;
    const noLexer = value.substring(0, lastNoLexerIndex)
    const rest = value.substring(data && data.last || value.length,
      value.length);

    return (
      <div>
        { noLexer }
        { (Lexer && data) && <Lexer { ...{ output: data.output } }/> }
        { (rest.length > 0) && <Parser value={rest} />}
      </div>
    )
  }
});

export default Parser;
