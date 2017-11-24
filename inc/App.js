/**
 * Created by tracnguyen on 11/23/17.
 */
class App {
    constructor(configs) {
        this.configs = configs;
        this.output = null;
    }

    run(arrAppArgs, render = true) {
        if ('undefined' !== typeof arrAppArgs[0]) {
            let commandName = arrAppArgs[0];
            if ('undefined' === typeof this[commandName]) {
                let ComponentFactory = require('./base/ComponentFactory');
                this[commandName] = ComponentFactory.initComponent(commandName, this.configs);
            }

            if (false !== this[commandName]) {
                arrAppArgs.splice(0, 1);
                this.output = this[commandName].execCommand(arrAppArgs);
            } else {
                console.error("Action not registered yet");
            }
        }

        if (render) {
            console.log(this.output);
        } else {
            return this.output;
        }
    }
}

module.exports = App;