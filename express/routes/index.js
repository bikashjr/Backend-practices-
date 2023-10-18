const router = require("express").Router();

const uiRouter = require('./routes.ui')
const apiRouter = require('./routes.api')

router.use("/api/v1", apiRouter);
router.use("/", uiRouter);

module.exports = router;