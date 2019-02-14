const express = require('express');
require('./services/passport')
const oauthRouteHandlers = require('./routes/oauth')

const app = express();
oauthRouteHandlers(app)

const PORT = process.env.PORT || 5000
app.listen(PORT);
