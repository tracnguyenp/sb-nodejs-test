const App = require('./inc/App');
let mainConfigs = require('./configs/main');

App.initInstance(mainConfigs);

let arrAppArgs = [];
process.argv.forEach(function (val, index) {
    if (index >= 2) {
        arrAppArgs.push(val);
    }
});

App.getInstance().run(arrAppArgs);