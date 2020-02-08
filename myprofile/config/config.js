let c = {
    dev:"development",
    prod:"production"
}

module.exports = require(`./${c.prod}`)