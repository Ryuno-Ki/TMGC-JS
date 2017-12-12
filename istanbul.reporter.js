// Kudos https://github.com/artberri/rollup-plugin-istanbul/issues/11
const instanbul = require('istanbul');
const MochaSpecReporter = require('mocha/lib/reporters/spec');

// Needs to be a constructor
function IstanbulReporter (runner) {
  const collector = new instanbul.Collector();
  const reporter = new instanbul.Reporter();
  reporter.addAll([ 'lcov', 'json' ]);

  new MochaSpecReporter(runner);

  runner.on('end', () => {
    collector.add(global.__coverage__);

    reporter.write(collector, true, () => {
      console.log('report generated');
    })
  })
}

module.exports = IstanbulReporter
