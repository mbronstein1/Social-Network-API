const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api'. apiRoutes);

//If any unrouted path is visited
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;