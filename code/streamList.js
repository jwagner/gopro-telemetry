const { translations, names, knownMulti } = require('./keys');
const hero7Labelling = require('./hero7Labelling');

function deviceList(klv) {
  result = {};
  (klv.DEVC || []).forEach(d => {
    //Save device name to results inside device id key
    if (!result[d.DVID]) result[d.DVID] = {};
    result[d.DVID][translations.DVNM] = d.DVNM;
    result[d.DVID].streams = result[d.DVID].streams || {};
    //Add all streams to each device, except for STNM error
    (d.STRM || []).forEach(s => {
      if (s.interpretSamples && s.interpretSamples !== 'STNM') {
        result[d.DVID].streams[s.interpretSamples] = s.STNM || s.RMRK || names[s.interpretSamples] || s.interpretSamples;
        //Simplify Hero7 Labelling style //And translate ID in cases where multiple values are known(since we haven not looked inside)
        result[d.DVID].streams[s.interpretSamples] = hero7Labelling(
          result[d.DVID].streams[s.interpretSamples],
          knownMulti[s.interpretSamples]
        );
      }
    });
  });
  return result;
}

module.exports = deviceList;
