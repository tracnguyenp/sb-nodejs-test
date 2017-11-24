require('./inc/base/Base');
let mainConfigs = require('./configs/main');

// console.log(mainConfigs);
Base.initApp(mainConfigs);

// console.log(process.argv);
let arrAppArgs = [];
process.argv.forEach(function (val, index) {
    if (index >= 2) {
        arrAppArgs.push(val);
    }
});

Base.getApp().run(arrAppArgs);