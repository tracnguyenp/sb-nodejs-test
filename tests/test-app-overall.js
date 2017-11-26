let chai = require('chai');
let expect = chai.expect;

describe('App ®Logic', function () {
    const App = require('../inc/App');
    let mainConfigs = {
        'mainConfigs': {
            'basePath': __dirname + '/..',
            'components': {
                'signup': {
                    'class': 'inc/Signup',
                    'responseData': {
                        'www.shopback.sg': {
                            'unit': 'SGD',
                            'amount': 5
                        }
                    }
                }
            }
        }
    };
    let mainConfigs2 = {
        'mainConfigs': {
            'basePath': __dirname + '/..',
            'components': {
                'signup': {
                    'class': 'inc/Signup',
                    'responseData': {
                        'www.shopback.sg': {
                            'unit': 'SGD',
                            // different values
                            'amount': 5000,
                        }
                    }
                }
            }
        }
    };

    App.initInstance(mainConfigs);
    // Try to init app second time using another configuration file
    App.initInstance(mainConfigs2);

    it('App needs to be initialized once', function () {
        let textTmp = App.getInstance().run(['signup', 'www.shopback.sg'], false);
        expect(textTmp).to.equal('Award bonus: 5.00 SGD');
    });

    it('redeem action should not be defined', function () {
        expect(App.getInstance().redeem).to.be.an('undefined');
    });

    it('signup action should be defined', function () {
        expect(App.getInstance().signup).to.be.an('object');
    });
});

describe('Signup action test', function () {
    const Signup = require('../inc/Signup');
    const component = new Signup({
        'responseData': {
            'www.shopback.sg': {
                'unit': 'SGD',
                'amount': 5,
            },
            'www.shopback.my': {
                'unit': 'MYR',
                'amount': 10,
            },
            'www.shopback.co.id': {
                'unit': 'IDR',
                'amount': 25000,
            },
            'www.shopback.com.tw': {
                'unit': 'TWD',
                'amount': 1000,
            },
            'www.myshopback.co.th': {
                'unit': 'THB',
                'amount': 500,
            },
            'www.shopback.com': {
                'unit': 'USD',
                'amount': 5,
            }
        }
    });

    it('signup to www.shopback.sg should be awarded 5 SGD', function () {
        let textTmp = component.execCommand(['www.shopback.sg'], false);
        expect(textTmp).to.equal('Award bonus: 5.00 SGD');
    });

    it('signup to www.myshopback.co.th should be awarded 500 HTB', function () {
        let textTmp = component.execCommand(['www.myshopback.co.th'], false);
        expect(textTmp).to.equal('Award bonus: 500.00 THB');
    });

    it('signup to www.shopback.vn should return nothing', function () {
        let textTmp = component.execCommand(['www.myshopback.vn'], false);
        expect(textTmp).to.equal(false);
    });
});

describe('Redeem action test', function () {
    const Redeem = require('../inc/Redeem');
    const component = new Redeem({
        'responseData': {
            'www.shopback.sg': {
                'destination': 'https://www.shopback.sg'
            },
            'www.shopback.my': {
                'destination': 'https://www.shopback.my'
            },
            'www.shopback.co.id': {
                'destination': 'https://www.shopback.co.id'
            },
            'www.shopback.com.tw': {
                'destination': 'https://www.shopback.com.tw'
            },
            'www.myshopback.co.th': {
                'destination': 'https://www.myshopback.co.th'
            },
            'www.shopback.com': {
                'destination': 'https://www.shopback.com'
            }
        }
    });

    it('redeem of www.shopback.sg should be redirected to https://www.shopback.sg', function () {
        let textTmp = component.execCommand(['www.shopback.sg'], false);
        expect(textTmp).to.equal('Visit https://www.shopback.sg to start earning cashback!');
    });

    it('redeem of www.shopback.co.id should be redirected to https://www.shopback.co.id', function () {
        let textTmp = component.execCommand(['www.shopback.co.id'], false);
        expect(textTmp).to.equal('Visit https://www.shopback.co.id to start earning cashback!');
    });

    it('redeem of www.shopback.vn should return to nowhere', function () {
        let textTmp = component.execCommand(['www.shopback.vn'], false);
        expect(textTmp).to.equal(false);
    });
});

describe('Spend action test', function () {
    const Spend = require('../inc/Spend');
    const component = new Spend({});

    it('spend 100 5 should return cashback of 5.00', function () {
        let textTmp = component.execCommand([100, 5], false);
        expect(textTmp).to.equal('Award cashback: 5.00');
    });

    it('spend 100.34 50 70 90 should return cashback of 20.07', function () {
        let textTmp = component.execCommand([100.34, 50, 70, 90], false);
        expect(textTmp).to.equal('Award cashback: 20.07');
    });

    it('spend 100.34 50 10 90 should return cashback of 10.03', function () {
        let textTmp = component.execCommand([100.34, 50, 10, 90], false);
        expect(textTmp).to.equal('Award cashback: 10.03');
    });

    it('spend nothing should return no cashback', function () {
        let textTmp = component.execCommand([], false);
        expect(textTmp).to.equal('No cashback');
    });

    it('spend zero amounts should return no cashback', function () {
        let textTmp = component.execCommand([0, 0], false);
        expect(textTmp).to.equal('No cashback');
    });
});