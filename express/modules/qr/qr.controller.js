// core packages
const QRCode = require("qrcode")

const createQr = async (data) => {
    const result = await QRCode.toDataURL(data)
    return result;
}

module.exports = { createQr }