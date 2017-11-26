/**
 * Created by tracnguyen on 11/23/17.
 */
let Component = require('./base/Component');

class Redeem extends Component {
    constructor(configs = null) {
        super(configs);
    }

    /**
     * Return the URL for user to redeem
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
                return 'Visit ' + this.responseData[domainName].destination + ' to start earning cashback!';
            } else {
                console.error("No valid domain found to redeem");
            }
        }

        return false;
    }
}

module.exports = Redeem;