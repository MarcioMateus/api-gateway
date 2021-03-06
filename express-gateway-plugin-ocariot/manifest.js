module.exports = {
    version: '1.0.0',
    init: function (pluginContext) {
       pluginContext.registerPolicy(require('./policies/account-authorization'));
       pluginContext.registerPolicy(require('./policies/iot-tracking-authorization'));
       pluginContext.registerPolicy(require('./policies/ds-agent-authorization'));
    },
    // this is for CLI to automatically add to "policies" whitelist in gateway.config
    policies:['account-authorization','iot-tracking-authorization', 'ds-agent-authorization'],
    schema: {
        $id: "http://express-gateway.io/schemas/plugins/express-gateway-plugin-ocariot.json"
    }
};
