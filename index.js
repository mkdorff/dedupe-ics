const fs = require('fs-extra');
const cal = require('./cal.js');

(async function() {
  const uniq = [];
  const newCal = [];
  cal.map(event => {
    const hash = `${event.match(/SUMMARY:(.*)\n/)[1]}::${event.match(/DTSTART(.*)\n/)[1]}`;
    if (!uniq.includes(hash)) {
      uniq.push(hash);
      newCal.push(event);
    } else {
      return;
    }
  });

  await fs.writeFile('deduped.ics', newCal.join('\n'))
})();