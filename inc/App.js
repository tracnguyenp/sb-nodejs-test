/**
 * Created by tracnguyen on 11/23/17.
 */
class App {
    constructor(configs) {
        this.configs = configs;
    }

    /**
     *
     * @param {Array} arrAppArgs
     */
    run(arrAppArgs) {
        if ('undefined' !== typeof arrAppArgs[0]) {
            let commandName = arrAppArgs[0];
            if ('undefined' === typeof this[commandName]) {
                let ComponentFactory = require('./base/ComponentFactory');
                this[commandName] = ComponentFactory.initComponent(commandName, this.configs);
            }

            if (false !== this[commandName]) {
                arrAppArgs.splice(0, 1);
                this[commandName].execCommand(arrAppArgs);
            } else {
                console.log('Action not registered yet');
            }
        }
    }
}

module.exports = App;