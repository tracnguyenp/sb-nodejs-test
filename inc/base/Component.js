/**
 * Created by tracnguyen on 11/23/17.
 */
class Component {
    constructor(configs) {
        let key;
        for (key in configs) {
            if (configs.hasOwnProperty(key) && 'class' !== key) {
                this[key] = configs[key];
            }
        }
    }

    execCommand() {

    }
}

module.exports = Component;