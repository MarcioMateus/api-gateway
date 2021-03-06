module.exports = {
    name: 'iot-tracking-authorization',
    policy: require('./authorization'),
    schema: {
        $id: 'http://express-gateway.io/schemas/policies/iot-tracking-authorization.json',
        type: 'object',
        properties: {
            accountServiceUrlBase: {
                type: 'string',
                title: 'url',
                description: 'the service URL for requests'
            }
        },
        required: ['accountServiceUrlBase']
    }
}
