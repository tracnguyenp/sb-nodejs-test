Base = {
    app: null,

    getApp() {
        return this.app;
    },

    initApp(configs) {
        let App = require('../App');
        if (this.app === null) {
            this.app = new App(configs);
        }
    }
};
module.exports = Base;