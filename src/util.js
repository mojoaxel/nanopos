import Currency from 'currency-formatter'

const pwrap = fn => (req, res, next) => fn(req, res).catch(next)

//const fiatFormatter = currency => amount => Currency.format(amount, { code: currency.toUpperCase() })
const fiatFormatter = currency => amount => new Intl.NumberFormat('de-DE', { style: 'currency', currency: currency.toUpperCase() }).format(amount);

module.exports = { pwrap, fiatFormatter }
