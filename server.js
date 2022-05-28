const express = require('express');
const http = require('http');
const path = require('path');
const reload = require('reload');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json()); // Parses json, multi-part (file), url-encoded

app.use('/public', express.static('public'));
app.use('/pages', express.static('pages'));
app.use('/api', express.static('api'));
app.use('/sdk', express.static('sdk'));

app.get('/current_user', (req, res) => {
  res.send(`
  {
    "status": 0,
    "msg": "ok",
    "data": {
      "name": "carvin"
    }
  }
  `);
});

// proxy
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api/quality', createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true,
}));

// NOTE: 这个匹配规则一定要放在 proxy 的下面，否则会先命中此规则。
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = http.createServer(app);

// Reload code here
reload(app)
  .then(function (reloadReturned) {
    // reloadReturned is documented in the returns API in the README

    // Reload started, start web server
    server.listen(app.get('port'), function () {
      console.log(
        'Web server listening on port http://localhost:' + app.get('port')
      );
    });
  })
  .catch(function (err) {
    console.error(
      'Reload could not start, could not start server/sample app',
      err
    );
  });
