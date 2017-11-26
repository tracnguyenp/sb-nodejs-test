/**
 * Created by tracnguyen on 11/23/17.
 */
const App = {
    /**
     * Singleton object
     */
    _instance: null,

    /**
     * Act as a constructor for singleton object
     *
     * @param configs
     * @returns {App}
     */
    constructInstance(configs) {
        this.configs = configs;
        return this;
    },

    /**
     * Initialize the singleton object
     *
     * @param {object} configs
     */
    initInstance(configs) {
        if (this._instance === null) {
            this._instance = this.constructInstance(configs);
        }
    },

    /**
     * Get the singleton object
     *
     * @returns {null}|{App}
     */
    getInstance() {
        return this._instance;
    },

    /**
     * Run the application
     *
     * @param {array} arrAppArgs
     * @param {boolean} render, print out the result (true) or not (false, return only)
     * @returns {*}
     */
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

    /**
     * Render the output
     *
     * @param {string} output
     * @param {boolean} printOut
     * @returns {*}
     */
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