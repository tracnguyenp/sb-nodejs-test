/**
 * Created by tracnguyen on 11/23/17.
 */
class App {
    constructor(configs) {
        let fs = require('fs');
        let key, classFilePath;
        for (key in configs.mainConfigs.components) {
            if (configs.mainConfigs.components.hasOwnProperty(key) && 'undefined' !== typeof configs.mainConfigs.components[key].class) {
                classFilePath = configs.mainConfigs.basePath + '/' + configs.mainConfigs.components[key].class;
                if (fs.existsSync(classFilePath + '.js')) {
                    let objComponent = require(classFilePath);
                    this[key] = new objComponent(configs.mainConfigs.components[key]);
                } else {
                    console.error('File not exists ' + classFilePath);
                }

            }
        }
    }

    /**
     *
     * @param {Array} arrAppArgs
     */
    run(arrAppArgs) {
        if ('undefined' !== typeof arrAppArgs[0]) {
            let commandName = arrAppArgs[0];
            if ('undefined' !== typeof this[commandName]) {
                arrAppArgs.splice(0, 1);
                this[commandName].execCommand(arrAppArgs);
            } else {
                console.log('Action not registered yet');
            }

        }
    }
}

module.exports = App;