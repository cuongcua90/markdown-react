'use strict';

export default function(value, r, resultIndex) {
  const rValues = r.exec(value);

  if (rValues) {
    const { index } = rValues;
    const blockParse = rValues[0];

    return {
      output: rValues[resultIndex],
      first: index,
      last: index + blockParse.length
    }
  }

  return rValues;
}
