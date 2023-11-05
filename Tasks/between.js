// Extract substring between prefix and suffix

getValueBetween = (str, p, s) => {
  const pIdx = str.indexOf(p);
  if (pIdx === -1) return '';

  const sIdx = str.indexOf(s)
  if (sIdx === -1) return str.substring(p)

  return str.substring(pIdx + p.length, sIdx);
};

require('../Tests/between.js')(getValueBetween);
