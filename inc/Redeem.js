/**
 * Created by tracnguyen on 11/23/17.
 */
let Component = require('./base/Component');

class Redeem extends Component {
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
                return domainName + " => " + this.responseData[domainName].destination;
            } else {
                console.error("No valid domain found to redeem");
            }
        }
    }
}

module.exports = Redeem;