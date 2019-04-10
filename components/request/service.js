const AppSettings = require('./../settings/service');
const QS = AppSettings.query;

class RequestService {

    static parseQuery (req, res, next) {
        let offset = isFinite(parseInt(req.query.offset))
            ? parseInt(req.query.offset)
            : QS.OFFSET_MIN;
        if (offset < QS.OFFSET_MIN ) offset = QS.OFFSET_MIN;
        let limit = isFinite(parseInt(req.query.limit))
            ? parseInt(req.query.limit)
            :  QS.LIMIT_DEFAULT;
        if (limit < QS.LIMIT_MIN || limit > QS.LIMIT_MAX) limit = QS.LIMIT_MAX;
        req.offset = offset;
        req.limit = limit
        next();
    }
}

module.exports = RequestService;