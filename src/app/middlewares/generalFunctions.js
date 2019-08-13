//combine all parsed into params
function combineParsed(req, res, next) {
    req.params = Object.assign(req.params, req.body, req.query);
    req.payload = {};
    req.scope = {};
    if (next) next();
}

//send payload
function sendPayload(req, res) {
    return res.send(req.payload);
}

module.exports = {
    combineParsed: combineParsed,
    sendPayload: sendPayload,
};