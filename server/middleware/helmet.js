const helmet = require("helmet")
let { scriptNonce } = require("./nonces")

const defaultCSP = ["'self'", "https:",process.env.NODE_ENV === 'production' ? '' : "'unsafe-inline'"]
socketUrl = process.env.NODE_ENV === 'production' ? '' : "ws://localhost:9856" //add production server url

module.exports = helmet({
    contentSecurityPolicy: {
        directives: {
            connectSrc: [
                "'self'",
                socketUrl],
            defaultSrc: defaultCSP,
            scriptSrc: [ 
                "'self'",
                 process.env.NODE_ENV === 'production' ? '' : "'unsafe-eval'",              
                "'strict-dynamic'", // For nonces to work
                `'nonce-${scriptNonce}'`,
            ],
            scriptSrcAttr: null, // Remove Firefox warning
            styleSrc: defaultCSP, 
        },
    },
})
