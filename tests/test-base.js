let chai = require('chai');
let expect = chai.expect;

describe('Base & App', function () {
    require('../inc/base/Base');
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

    Base.initApp(mainConfigs);
    // Try to init app second time using another configuration file
    Base.initApp(mainConfigs2);

    it('App need to be initialized once when using Base to initialize', function () {
        let textTmp = Base.getApp().run(['signup', 'www.shopback.sg'], false);
        expect(textTmp).to.equal('Award bonus: 5.00 SGD');
    });

    it('redeem action should not be defined', function () {
        expect(Base.getApp().redeem).to.be.an('undefined');
    });

    it('signup action should be defined', function () {
        expect(Base.getApp().signup).to.be.an('object');
    });
});