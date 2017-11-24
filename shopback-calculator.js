require('./inc/base/Base');
let mainConfigs = require('./configs/main');

Base.initApp(mainConfigs);

let arrAppArgs = [];
process.argv.forEach(function (val, index) {
    if (index >= 2) {
        arrAppArgs.push(val);
    }
});

Base.getApp().run(arrAppArgs);