require('../inc/base/Base');
let chai = require('chai');
let expect = chai.expect;

describe('Base', function() {
    it('App need to be initialized once when using Base to initialize', function() {
        let mainConfigs = require('../configs/main');
        let mainConfigs2 = require('../configs/main2');

        Base.initApp(mainConfigs);
        // Try to init app second time using another configuration file
        Base.initApp(mainConfigs2);

        let textTmp = Base.getApp().run(['signup', 'www.shopback.sg'], false);

        expect(textTmp).to.equal('www.shopback.sg => SGD 5');
    });
});