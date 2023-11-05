// Compare two dictionaries

let compare = (first_values, ...parameters_LIST) => {
    const second_values = parameters_LIST[0];
    if (Object.keys(first_values).join('-') !== Object.keys(second_values).join('-')) return false;
    for (const key of Object.keys(first_values)) {
      if (first_values[key] !== second_values[key]) return false
    }
    return true;
  };

require('../Tests/compare.js')(compare);
