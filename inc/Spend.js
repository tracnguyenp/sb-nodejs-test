/**
 * Created by tracnguyen on 11/23/17.
 */
let Component = require('./base/Component');

class Spend extends Component {
    constructor(configs) {
        super(configs);
    }

    /**
     * Return the initial reward for signing up
     *
     * @param {Array} arrArgs argument received from the command console
     */
    execCommand(arrArgs) {
        let highestAmount = 0, currentCashbackRate = 0.05, finalCashbackRate = 0.2;
        arrArgs.forEach(function (spendAmount) {
            spendAmount = parseFloat(spendAmount);
            if (spendAmount > highestAmount) {
                highestAmount = spendAmount
            }
            if (spendAmount >= 50) {
                currentCashbackRate = 0.2;
            } else if (spendAmount < 50 && spendAmount >= 20) {
                currentCashbackRate = 0.15;
            } else if (spendAmount < 20 && spendAmount >= 10) {
                currentCashbackRate = 0.1;
            } else {
                currentCashbackRate = 0.05;
            }
            if (finalCashbackRate >= currentCashbackRate) {
                finalCashbackRate = currentCashbackRate;
            }
        });
        let cashBackAmount = (finalCashbackRate * highestAmount).toFixed(2);
        return cashBackAmount > 0 ? "Award cashback: " + cashBackAmount : "No cashback";
    }
}

module.exports = Spend;