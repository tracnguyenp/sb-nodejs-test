/**
 * Created by tracnguyen on 11/23/17.
 */
const App = {
    _instance: null,
    constructInstance(configs) {
        this.configs = configs;

        return this;
    },

    initInstance(configs) {
        if (this._instance === null) {
            this._instance = this.constructInstance(configs);
        }
    },

    getInstance() {
        return this._instance;
    },

    run(arrAppArgs, render = true) {
        let output = false;
        if ('undefined' !== typeof arrAppArgs[0]) {
            let commandName = arrAppArgs[0];
            if ('undefined' === typeof this[commandName]) {
                const ComponentFactory = require('./base/ComponentFactory');
                this[commandName] = ComponentFactory.initComponent(commandName, this.configs);
            }

            if (false !== this[commandName]) {
                arrAppArgs.splice(0, 1);
                output = this[commandName].execCommand(arrAppArgs);
            } else {
                console.error("Action not registered yet");
            }
        }

        return this.render(output, render);
    },

    render(output, printOut = true) {
        if (printOut) {
            if (output !== false) {
                console.log(output);
            }
        } else {
            return output;
        }
    }
};

module.exports = App;