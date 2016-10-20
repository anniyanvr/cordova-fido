var exec = require('cordova/exec');

/**
 * These functions are basically convenience functions for cordova.exec()
 * They bind to the 'clobbers' target defined in the plugin.xml file, such that
 * uafDiscover() becomes fido.uafDiscover() in the Cordova application
 */ 
var fido = {
    uafDiscover: function() {
        return new Promise(function(resolve, reject) {
            exec(
                function(ret) { // success
                    resolve (ret);
                },
                function(err) { // error
                    reject (err);
                }, "fido", "uafDiscover", []);
        });
    },

    uafCheckPolicy: function(message, origin) {
        return new Promise(function(resolve, reject) {
            exec(
                function(ret) { // success
                    resolve (ret);
                },
                function(err) { // error
                    reject (err);
                }, "fido", "uafCheckPolicy", [message, origin]);
        });
    },

    uafOperation: function(message, channelBindings, origin) {
        return new Promise(function(resolve, reject) {
            exec(
                function(ret) { // success
                    resolve (ret);
                },
                function(err) { // error
                    reject (err);
                }, "fido", "uafOperation", [message, channelBindings, origin]);
        });
    }
};

module.exports = fido;