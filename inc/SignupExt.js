/**
 * Created by tracnguyen on 11/23/17.
 */
let Signup = require('./Signup');

class SignupExt extends Signup {
    constructor(configs) {
        super(configs);
    }

    /**
     * Return the initial reward for signing up
     *
     * @param {Array} arrArgs
     */
    execCommand(arrArgs) {
        let domainName;
        if (typeof arrArgs[0] !== 'undefined') {
            domainName = arrArgs[0];
        }

        if ('undefined' !== typeof this.responseData) {
            if (domainName && 'undefined' !== typeof this.responseData[domainName]) {
                console.log(domainName + " override => " + this.responseData[domainName].unit + " " + this.responseData[domainName].amount);
            } else {
                console.log("No valid domain found");
            }
        }
    }
}

module.exports = SignupExt;