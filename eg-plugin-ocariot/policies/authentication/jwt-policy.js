/**
 * Policy to validate JWT
 */
module.exports = {
    name: 'ocariot-jwt-policy',
    policy: require('./jwt'),
    schema: {
        $id: 'http://express-gateway.io/schemas/policies/ocariot-jwt-policy.json',
        type: 'object',
        properties: {
            secretOrPublicKey: {
                type: 'string'
            },
            secretOrPublicKeyFile: {
                type: 'string'
            },
            issuer: {
                type: 'string'
            }
        },
        required: ['issuer'],
        oneOf: [{required: ['secretOrPublicKey']}, {required: ['secretOrPublicKeyFile']}]
    }
}